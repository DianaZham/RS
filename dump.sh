#!/bin/bash
fdate=$(date +%Y-%m-%d)
cp -fr backend/db.sqlite3 dump_db/db_${fdate}.sqlite3