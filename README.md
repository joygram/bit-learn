
## About bit-learn(<a href="https://www.ulearnpro.com">ULEARN</a> forked) 

bit-learn is an impressive LMS script which comprises of all the basic features that needed for online learning. This package includes responsive frontend website, instructor/admin dashboard with a backend template. Admin can manage every aspect of the system, while the instructors could create creative courses through an interactive curriculum with various types of course files such as audio, video, document and text.

## Demo & Credentials
Demo Link : https://www.ulearnpro.com/demo/

|    Role       |        Email ID        |   Password    |
| ------------- | ---------------------  | ------------- |
|    Admin      | admin@ulearn.com       |    secret     |
|    Instructor | instructor@ulearn.com  |    secret     |
|    Student    | student@ulearn.com     |    secret     |


## Installation
In the root folder, find the .env file and change the following values

```sh
APP_NAME=
APP_URL=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Through terminal or command prompt, update composer to install the dependencies:

```sh
composer update
```
Run the migration command to create the tables

```sh
php artisan migrate
```

Run the seeder to import mandatory values to the tables

```sh
php artisan db:seed
```

## Install

```
apt-get install php7.1
apt-get install php7.1-sqlite
apt-get install php7.1-curl 
apt-get install php7.1-xml
#install composer for php7.1
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-22-04
```


