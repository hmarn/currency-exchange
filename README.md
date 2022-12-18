## Currency Exchange application

---

### How to run

#### Run backend seperately
```
cd flask_app/
./run_docker.sh
```

#### Run frontend seperately
```
cd frontend/
./run_docker.sh
```

#### Run frontend and backend together

Buid only,
> docker-compose build

Buid and run, (if there were any changes in docker config, rebuild also same command)
> docker-compose up --build

Browse API
http://0.0.0.0:8000

Browse Frontend
http://0.0.0.0:3000





