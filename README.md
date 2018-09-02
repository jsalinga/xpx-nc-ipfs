# xpx-nc-ipfs

This project aims to integrate IPFS and Nextcloud Systems with Proxima-X' xpx-java-sdk to protect the file.<br/><br/>

Required: you must first have these systems installed and running on your machine:<br/>
    1. go-ipfs (https://github.com/ipfs/go-ipfs)<br/>
    2. PostgreSQL 9.5 is also required<br/>
    3. Oracle Java Runtime version 1.8<br/>
    4. PHP v.7.1 or up and required libraries<br/><br/>

As of 09/02/2018. Java listener programs used "nc" as database name<br/><br/>

To run Nextcloud on development mode, execute "php -S localhost:9000" from xpx-nc-ipfs directory<br/><br/><br/>

Before uploading any file, please see and modify java/bin/fslistener-v.0.0.6/fslistener.sh or java/bin/fslistener-v.0.0.6/fslistener.service to fit your setup.<br/><br/>

Example of listener execution: java -jar /path/to/fslistener/fslistener-v.0.0.6.jar /path/to/nextcloud/data