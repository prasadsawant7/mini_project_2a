# Mini Project 2A

### Commands to run

```
<!-- If you dont have a local repo then clone the github remote repo first -->
git clone https://github.com/prasadsawant7/mini_project_2a.git

<!-- Change current working directory to project directory -->
cd mini_project_2a

<!-- Install all dependencies first -->
npm i

<!-- To start development server -->
npm run dev

<!-- To build for production -->
npm run build

<!-- To start production server -->
npm run preview
```

```
# If you want to create any component
create folder inside src/client/components/ComponentName/ComponentName.jsx
```

```
<!-- To start server (FastAPI) -->
<!-- mini_project_2a/ from this directory use following commands -->
<!-- Change directory to server folder -->
cd .\src\server\

<!-- Activate the Virtual Environment -->
.\venv\Scripts\activate.bat

<!-- Start the server -->
uvicorn app:app --reload

<!-- Now Python server is started to access its APIs goto the following URL -->
http://127.0.0.1:8000/docs

<!-- Now to make requests to the backend APIs from frontend do following things -->
<!-- First start vite application using start development server command -->
npm run dev

<!-- Then open new terminal and keep development server terminal on in background -->
cd .\src\server\
.\venv\Scripts\activate.bat
uvicorn app:app --reload

<!-- After performing above commands then from frontend application to call APIs use fetch or axios -->
<!-- APIs for each entity -->
http://127.0.0.1:8000/admin
http://127.0.0.1:8000/user
http://127.0.0.1:8000/blog
http://127.0.0.1:8000/crop

fetch("http://127.0.0.1:8000/{entity}")

axios.get("http://127.0.0.1:8000/{entity}")
axios.post("http://127.0.0.1:8000/{entity}")
axios.put("http://127.0.0.1:8000/{entity}")
axios.delete("http://127.0.0.1:8000/{entity}")

<!-- Use any api / library to make API requests -->

# To commit changes to remote repo perform following commands
npm run add
npm run commit "Any message here"
npm run pull
npm run push

# To check status of your git commits
npm run status

# Don't forget to git pull first before git push !!!
```

# Remaining Work
- [ ] In your-blog add edit option on each blog
- [ ] Create a edit blog page
- [ ] Create Crops pages just like as Blogs page
- [ ] Add OTP functionality to User model while registration only, just like Admin model
- [ ] Then make all requests (get, post, put, delete) from frontend in forms or in some pages
- [ ] Add JWT for login and signup Session management
