#!/usr/bin/env python3
"""
==============================================================================
DS 101 Project 4 Visual Essay - Cross-Platform Setup Script
==============================================================================
This script creates a virtual environment and installs all required packages
for the DS 101 Project 4 Visual Essay assignment.

Works on: Windows, macOS, and Linux

Usage:
    python setup.py

Requirements:
    - Python 3.8 or higher
    - Internet connection for downloading packages
==============================================================================
"""

import os
import sys
import subprocess
import platform
from pathlib import Path


def print_header():
    """Print welcome header."""
    print("=" * 50)
    print("DS 101 Project 4 - Environment Setup")
    print("=" * 50)
    print()


def print_success(message):
    """Print success message with checkmark."""
    print(f"✓ {message}")


def print_error(message):
    """Print error message."""
    print(f"❌ Error: {message}")


def print_info(message):
    """Print info message."""
    print(f"ℹ️  {message}")


def check_python_version():
    """Check if Python version meets minimum requirements."""
    print("Checking Python version...")
    
    version = sys.version_info
    version_str = f"{version.major}.{version.minor}.{version.micro}"
    
    if version.major < 3 or (version.major == 3 and version.minor < 8):
        print_error(f"Python {version_str} is too old.")
        print_info("This project requires Python 3.8 or higher.")
        print_info("Please update Python from https://www.python.org/downloads/")
        return False
    
    print_success(f"Python {version_str} found")
    print()
    return True


def get_venv_paths():
    """Get virtual environment paths based on operating system."""
    venv_dir = Path("venv")
    
    if platform.system() == "Windows":
        python_executable = venv_dir / "Scripts" / "python.exe"
        pip_executable = venv_dir / "Scripts" / "pip.exe"
        activate_script = venv_dir / "Scripts" / "activate.bat"
        activate_ps_script = venv_dir / "Scripts" / "Activate.ps1"
    else:
        python_executable = venv_dir / "bin" / "python"
        pip_executable = venv_dir / "bin" / "pip"
        activate_script = venv_dir / "bin" / "activate"
        activate_ps_script = None
    
    return {
        "venv_dir": venv_dir,
        "python": python_executable,
        "pip": pip_executable,
        "activate": activate_script,
        "activate_ps": activate_ps_script
    }


def create_virtual_environment():
    """Create a virtual environment."""
    print("Creating virtual environment...")
    
    venv_dir = get_venv_paths()["venv_dir"]
    
    # Check if venv already exists
    if venv_dir.exists():
        response = input("Virtual environment already exists. Recreate it? (y/n): ")
        if response.lower() != 'y':
            print_info("Using existing virtual environment")
            print()
            return True
        
        # Remove existing venv
        print_info("Removing existing virtual environment...")
        import shutil
        try:
            shutil.rmtree(venv_dir)
        except Exception as e:
            print_error(f"Failed to remove existing venv: {e}")
            return False
    
    # Create new virtual environment
    try:
        subprocess.run(
            [sys.executable, "-m", "venv", "venv"],
            check=True,
            capture_output=True,
            text=True
        )
        print_success("Virtual environment created successfully")
        print()
        return True
    except subprocess.CalledProcessError as e:
        print_error("Failed to create virtual environment")
        print_info("Try running: python -m pip install --user virtualenv")
        if e.stderr:
            print(f"Details: {e.stderr}")
        return False


def upgrade_pip(venv_paths):
    """Upgrade pip in the virtual environment."""
    print("Upgrading pip...")
    
    try:
        subprocess.run(
            [str(venv_paths["python"]), "-m", "pip", "install", "--upgrade", "pip"],
            check=True,
            capture_output=True,
            text=True
        )
        print_success("pip upgraded successfully")
        print()
        return True
    except subprocess.CalledProcessError as e:
        print_error("Failed to upgrade pip (continuing anyway)")
        print()
        return True  # Non-critical, continue anyway


def install_packages(venv_paths):
    """Install required packages from requirements.txt."""
    print("Installing required packages...")
    print("This may take a few minutes...")
    print()
    
    # Check if requirements.txt exists
    requirements_file = Path("requirements.txt")
    if not requirements_file.exists():
        print_error("requirements.txt not found")
        return False
    
    try:
        # Show progress by not capturing output
        result = subprocess.run(
            [str(venv_paths["pip"]), "install", "-r", "requirements.txt"],
            check=True
        )
        print()
        print_success("All packages installed successfully")
        print()
        return True
    except subprocess.CalledProcessError as e:
        print_error("Failed to install packages")
        print_info("You can try installing manually:")
        print_info(f"  {venv_paths['activate']} && pip install -r requirements.txt")
        return False


def print_next_steps(venv_paths):
    """Print instructions for next steps."""
    print("=" * 50)
    print("✓ Setup Complete!")
    print("=" * 50)
    print()
    print("To start working on your project:")
    print()
    
    # Activation command based on OS
    if platform.system() == "Windows":
        print("  1. Activate the virtual environment:")
        print("     PowerShell:")
        print(f"       .\\{venv_paths['activate_ps']}")
        print("     Command Prompt:")
        print(f"       {venv_paths['activate']}")
    else:
        print("  1. Activate the virtual environment:")
        print(f"     source {venv_paths['activate']}")
    
    print()
    print("  2. Launch Jupyter Notebook:")
    print("     jupyter notebook project_4_template.ipynb")
    print()
    print("  3. When you're done, deactivate the environment:")
    print("     deactivate")
    print()
    print("=" * 50)
    print()
    
    # Additional Windows-specific help
    if platform.system() == "Windows":
        print("💡 Windows Tips:")
        print("   - If PowerShell blocks scripts, use Command Prompt instead")
        print("   - Or run in PowerShell: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process")
        print()


def print_mac_security_note():
    """Print Mac-specific security note if applicable."""
    if platform.system() == "Darwin":  # macOS
        print()
        print("🍎 Mac Security Note:")
        print("   If you encounter security warnings when running scripts,")
        print("   go to System Preferences > Security & Privacy and click 'Allow Anyway'")
        print()


def main():
    """Main setup function."""
    print_header()
    
    # Check Python version
    if not check_python_version():
        return 1
    
    # Create virtual environment
    if not create_virtual_environment():
        return 1
    
    # Get virtual environment paths
    venv_paths = get_venv_paths()
    
    # Upgrade pip
    if not upgrade_pip(venv_paths):
        # Non-critical, continue
        pass
    
    # Install packages
    if not install_packages(venv_paths):
        return 1
    
    # Print next steps
    print_next_steps(venv_paths)
    
    # Print Mac security note if applicable
    print_mac_security_note()
    
    return 0


if __name__ == "__main__":
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print()
        print_info("Setup cancelled by user")
        sys.exit(1)
    except Exception as e:
        print()
        print_error(f"Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
