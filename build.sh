#!/bin/bash
rm -r -f LinqRunner.Server/wwwroot
rm -r -f LinqRunner.Server/bin
cd LinqRunner.Client/
webpack
cd ..
dotnet publish LinqRunner.Server/
docker build . -t daydreamerio/linqrunner
docker push daydreamerio/linqrunner