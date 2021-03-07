### Updating folder: /src, /public ###

Remove-Item .\template\src\ -Recurse -Force;
Remove-Item .\template\public\ -Recurse -Force
Copy-Item .\src\ -Recurse .\template\src;
Copy-Item .\public\ -Recurse .\template\public

### Updating files ###

#.travis.yml
Copy-Item .\.travis.yml .\template\.travis.yml
#.netlify.toml
Copy-Item .\netlify.toml .\template\netlify.toml
#.gitignore
Copy-Item .\.gitignore .\template\gitignore

Write-Output "Template updated!"
