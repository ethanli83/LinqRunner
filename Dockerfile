FROM microsoft/dotnet
WORKDIR app
COPY EfOnDocker.Web/bin/Debug/netcoreapp1.1/publish .
EXPOSE 5000
ENV ASPNETCORE_URLS http://+:5000
CMD ["dotnet", "EfOnDocker.Web.dll"]
