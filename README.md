## Currency Exchange application

---

### How to run

#### Run backend seperately

Python Flask app for backend APIs.

```
cd flask_app/
./run_docker.sh
```

#### Run frontend seperately

Node: 14.19.0
React16
Enzyme + Jest

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
http://localhost:8000/exchange_rate

Browse Frontend
http://localhost:3000





