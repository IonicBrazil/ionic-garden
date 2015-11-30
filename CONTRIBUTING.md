# Contributing for Ionic Garden

Are you thinking in contribute to Ionic Garden? Here's how you can do it.
Before to start contributing with project, read this page with atention for to know how the project is organized.
	
###	How to explore issues
	
The [issues](https://github.com/IonicBrazil/ionic-garden/issues) is the place where, bug reports, features requests and submiting pull requests are done. We have some restrictions:   
- Do not use issues for personal support request. [Stack Overflow - tag Ionic](http://stackoverflow.com/questions/tagged/ionic-framework) is good for it.  
- Do not disrespect nobody.  
- Respect other opinions.
	
### Pull requests

- [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork and add dependences  
    ```
    # Clone your fork of the repo into the current directory  
    git clone https://github.com/<your-username>/ionic-garden    
    # Navigate to the newly cloned directory  
    cd ionic-garden  
    # Add dependences  
    npm install -d  
    bower install  
    ```
- If you cloned a while ago, get the latest changes from upstream  
    ```
    git checkout master  
    git pull upstream master  
    ```
- For add new resources your need to create a new branch  
    ```
	git branch branch_name  
	```
- Add, delete and modify files what you think necessary  
- Before to commit  
	```
	git fetch  
	```
	**OBS:** Fetches work from the remote into the local copy  		
- Adds files from the working directory to the staging area  
	```
	git add files_modified  
	```
- Permanently stores file changes from the staging area in the repository  
	```
	git commit -m "message specifying your changes"  
	```
- Pushes a local branch to the origin remote  
    ```
	git push origin <branch_name>  
	```
- [Pull request](https://help.github.com/articles/using-pull-requests/) with clear description of your changes and a title specifying your modifications.  
- **IMPORTANT:** Remenber this project is under the terms of the MIT License (if it includes code changes).

### How to test your changes
Before to realize a push, is advisable to test your changes with
        ```
		ionic serve
    	```.
    And acess your project in browser with:
        ```
        	localhost:8100
        ```.