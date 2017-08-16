#!/usr/bin/env bash

echo "Install Firefox"
dnf -y install firefox && dnf clean all
