# xpx-nc-ipfs

This project aims to integrate IPFS and Nextcloud Systems with Proxima-X' xpx-java-sdk to protect the file.

Required: you must first have these systems installed and running on your machine:
    1. go-ipfs (https://github.com/ipfs/go-ipfs)
    2. PostgreSQL 9.5 is also required
    3. Oracle Java Runtime version 1.8
    4. PHP v.7.1 or up and required libraries

As of 09/02/2018. Java listener programs used "nc" as database name

To run Nextcloud on development mode, execute "php -S localhost:9000" from xpx-nc-ipfs directory


Before uploading any file, please see and modify java/bin/fslistener-v.0.0.6/fslistener.sh or java/bin/fslistener-v.0.0.6/fslistener.service to fit your setup