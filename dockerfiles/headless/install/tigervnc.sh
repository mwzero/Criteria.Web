#!/usr/bin/env bash

echo "Install TigerVNC server"
dnf -y install tigervnc-server && dnf clean all
