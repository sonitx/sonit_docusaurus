docker run \
--name dbt \
--network=host \
--mount type=bind,source=/Volumes/Data/sonit_knowledges/temp/dbt/app,target=/usr/app \
--mount type=bind,source=/Volumes/Data/sonit_knowledges/temp/dbt/profiles.yml,target=/root/.dbt/ \
--platform linux/x86_64 \
ghcr.io/dbt-labs/dbt-core:1.8.6

## Cài đặt dbt

```
python3 -m venv /Users/hungson/Data/myproject/dbt
source /Users/hungson/Data/myproject/dbt/bin/activate
python3 -m pip install dbt
```

## Cài đặt dbt postgres

```
dbt python3 -m pip install dbt-postgres
```

## Init project

```
dbt init
```

## dbt run 

```
dbt run --profiles-dir=/Users/hungson/Desktop/profile_temp --project-dir=/Volumes/Data/myproject/dbt/hello_world
```

## dbt debug 

```
dbt debug --profiles-dir=/Users/hungson/Desktop/profile_temp --project-dir=/Volumes/Data/myproject/dbt/hello_world
```