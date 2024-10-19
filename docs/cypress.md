docker run -it -v $PWD:/e2e -w /e2e cypress/included:13.15.0

docker run -it -v $PWD:/e2e -w /e2e -e TMS_API=https://in-callback.dev.salespikes.global cypress/included:13.15.0