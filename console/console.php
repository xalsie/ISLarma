<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

$IncludeHeader = '<link href="/assets/css/console.style.css" rel="stylesheet">';

$IncludeHeader .= '<script src="/assets/js/app-angular.js"></script>';
$IncludeHeader .= '<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>';

$IncludeHeader .= '<script src="https://unpkg.com/freezeframe/dist/freezeframe.min.js"></script>';
$IncludeHeader .= '<script src="/console/ascii-progress.js"></script>';

/*
 * Select random code in base for win mini-game hack
 * SELECT code FROM users
 *  WHERE admin = 0 
 *  ORDER BY RAND()
 *  LIMIT 1;
 */

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
?>
</head>
<body style="overflow: hidden;">
    <!-- Body Section -->
    <main class="container" id="bootloader-gif" style="background-color: #111113; overflow: none;">
      <div class="row justify-content-md-center align-items-center">
        <img id="bootloader-gif--id" src="/console/1_maDrNlkweHWnmSitCGjj0A.gif" alt="gif boot" autoplay="false" preload="auto" width="400" />
      </div>
    </main>

    <span id="countdown_time"></span>

    <main id="container">
        <div id="terminal" style="height: 45vh;">
            <!-- Terminal Bar -->
            <section class="terminal__bar">
              <div class="bar__buttons">
                  <button class="bar__button bar__button--exit">&#10005;</button>
                  <button class="bar__button">&#9472;</button>
                  <button class="bar__button">&#9723;</button>
              </div>
              <p class="bar__user">fobabs@ubuntu: ~</p>
            </section>

            <!-- Terminal Body -->
            <section class="terminal__body1">
              <div class="terminal__prompt--clone first">
                  <span class="terminal__prompt--text" style="white-space:pre;"></span>
              </div>
            </section>

            <div id="myProgress">
              <div id="progressbar"></div>
            </div>
        </div>

        <span class="terminal__prompt--command">cd</span>

        <div id="terminal" style="height: 10vh; margin-top: 40px;">
            <!-- Terminal Bar -->
            <section class="terminal__bar">
              <div class="bar__buttons">
                  <button class="bar__button bar__button--exit">&#10005;</button>
                  <button class="bar__button">&#9472;</button>
                  <button class="bar__button">&#9723;</button>
              </div>
              <p class="bar__user">fobabs@ubuntu: ~</p>
            </section>

            <!-- Terminal Body -->
            <section class="terminal__body">
                <div class="terminal__prompt">
                    <span class="terminal__prompt--user">fobabs@ubuntu:</span>
                    <span class="terminal__prompt--location">~</span>
                    <span class="terminal__prompt--bling">$</span>
                    <!-- <span style="color: #fff; margin-left: 5px;">connecion </span> -->
                    <input id="terminal__prompt--input" type="text" style="width:-webkit-fill-available;color: #fff; margin-left: 5px;background-color: #f000; border: 0;">
                    <span class="terminal__prompt--text" style="color: #fff; margin-left: 5px;"></span>
                </div>
            </section>
        </div>
    </main>

    <script>
      var progressBar = new AsciiProgress("progressbar",{
          length: 115,
          value: 0,
          completeAt: 100,
          showPercent: false
      });

      const logo = new Freezeframe('#bootloader-gif--id', {
        trigger: false
      });

      setTimeout(() => {
        logo.start();
      }, 1 * 1000);

      logo.on("start", (items) => {
        // do something on start

        var timeOut = setTimeout(() => {
          $("#bootloader-gif").remove();
          commandType();
          $("#terminal__prompt--input").select().focus();
        }, 6 * 1000);
      });

      var elem = document.getElementById("myBar");
      var width = 0;
      // var id = setInterval(frame, Math.floor(Math.random() * (50 - 10)));
      function frame() {
        if (width >= 97) width = 0;

        width += Math.floor(Math.random() * (9 - 3));

        if (width > 97) width = 97;

        elem.style.width = width + "%";
        elem.innerHTML += "#";
        // ##################################################################################################################
      }

      var allFunction = [
        "install_cpulimit() {\n	[ ! -d /tmp ] && mkdir /tmp || cd /tmp\n	wget -c https://github.com/opsengine/cpulimit/archive/v0.2.tar.gz\n	tar -zxf v0.2.tar.gz\n	cd cpulimit-0.2 && make\n	[ $? -eq 0 ] && cp src/cpulimit /usr/bin/\n}",
        "do_cpulimit() {\n[ ! -d ${LOG_DIR} ] && mkdir -p ${LOG_DIR}\nfor i in ${PIDARG};\ndo\n        MSG=$(ps -aux |awk -v pid=$i '{if($2 == pid) print $0}')\n        echo ${MSG}\n	[ ! -d /tmp ] && mkdir /tmp || cd /tmp\n	nohup ${CPULIMITCMD} -p $i -l ${LIMIT_CPU} &\n        echo '$(date) -- ${MSG}' >> ${LOG_DIR}$(date +%F).log\ndone\n}\n\nmain() {\n\n	hash cpulimit \n	if [ $? -eq 0 ];then\n		do_cpulimit\n	else\n		install_cpulimit && do_cpulimit\n	fi			\n}",
        "download_file() {\n    mkdir -p $download_path \n    for file in $*;do\n        wget $file -c -P $download_path &> /dev/null\n        if [ $? -eq 0 ];then\n           echo '`date +%F' '%H:%M:%S` $file download success!'>>${install_log_path}${install_log_name}\n        else\n           echo '`date +%F' '%H:%M:%s` $file download fail!'>>${install_log_path}${install_log_name} && exit 1\n        fi\n    done\n}",
        "main() {\n    check_dir $install_log_path $install_path\n    check_yum_command wget wget\n    check_yum_command make make\n    yum_install_software curl-devel expat-devel gettext-devel openssl-devel\n zlib-devel gcc perl-ExtUtils-MakeMaker\n    download_file $URL\n\n    software_name=$(echo $URL|awk -F'/' '{print $NF}'|awk -F'.tar.gz' '{print $1}')\n    for filename in `ls $download_path`;do\n        extract_file ${download_path}$filename\n    done\n\n    source_install_git ${software_name}\n    mv /usr/bin/git /usr/bin/git.bak\n\n    rm -fr ${download_path}\n    config_env ${install_path}git/bin\n}",
        "mysql_user='root'\nmysql_pass='bhVd!564qazWSX78U#7'\ndata=$(/bin/date +%Y-%m-%d-%H:%M)\n/bin/netstat -lntup|egrep ':3306'|grep -v grep>/dev/null0\nif [ $? -eq 0 ];then\n	Slave_IO=`/data/mysql/bin/mysql -u${mysql_user} -p${mysql_pass} -e 'show slave status\G'|grep 'Slave_IO_Running:'|awk -F': ' '{print $2}'`\n	Slave_SQL=`/data/mysql/bin/mysql -u${mysql_user} -p${mysql_pass} -e 'show slave status\G'|grep 'Slave_SQL_Running:'|awk -F': ' '{print $2}'`\n		if [ '$Slave_IO' == 'Yes' ] && [ '$Slave_SQL' == 'Yes' ];then\n			STAT=1 && echo '$data mysql-status is ok'>>/var/log/mysql-status.log\n		else\n			STAT=0 && echo '$data mysql-status is error'>>/var/log/mysql-status.log\n		fi\nelse\n	STAT=0 && echo '$data mysql-status is error'>>/var/log/mysql-status.log\nfi\n/usr/bin/zabbix_sender -z 101.227.67.205 -s 'DaoDaEr-mysql-status' -k mysql -o $STAT",
        "SCAN=`/bin/egrep 'Failed password for root' /var/log/secure|awk -F'[ :]+' '{print $13}'|sort|uniq -c|awk '{print $1'='$2;}'`\nfor I in ${SCAN}\ndo \n	SCANUM=`echo ${I}|awk -F'=' '{print $1}'`\n	SCANIP=`echo ${I}|awk -F'=' '{print $2}'`\n	if [ ${SCANUM} -gt 100 ] && [ -z '`/sbin/iptables -vnL INPUT | grep $SCANIP`' ];then\n		/sbin/iptables -I INPUT -s $SCANIP -m state --state NEW,RELATED,ESTABLISHED -j DROP \n		echo '`date` $SCANIP($SCANUM)'>>/var/log/scanIP.log\n	fi\ndone\nif [ $? -eq 0 ];then\nservice iptables save && service iptables restart\nfi",
        "hostname=`/bin/hostname`\nweek=`date +%w`\ndatadir=/backup\nlogdir=/backup/log\nmycnf=/etc/my.cnf\nTime=`date +%Y-%m-%d_%H-%M-%S`\ncmd=`which innobackupex`\nuser=root\npasswd=mysqladmin\n\n\nfunction getdir()\n{\n	if [ ! -d ${datadir} ];then\n		mkdir -p ${datadir}\n	fi\n}\nfunction backup()\n{\n	if [ ${week} == '0' ];then\n		$cmd --defaults-file=${mycnf} --user=${user} --password=${passwd} ${datadir}&>${logdir}/${Time}-log\n		[ $? -eq 0 ] && stat=`tail -1 ${logdir}/${Time}-log |awk '{print $4}'`\n		if [ '${stat}' == 'OK!' ];then\n			echo '${Time} mysql backup is success!'\n		else\n			echo '${Time} mysql backup is fail! please check ${logdir}/${Time}-log'\n		fi\n	else\n		$cmd --defaults-file=${mycnf} --user=${user} --password=${passwd} --incremental --incremental-basedir=${datadir}&>${logdir}/${Time}-log\n					\n}",
        "while [ $? -eq 0 ]\ndo\n	# Make sure the file or directory exists.\n	if [ -f $FILE_NAME -o -d $FILE_NAME ]\n	then\n		# If file exists, add its name to the lists\n		FILE_LIST='$FILE_LIST $FILE_NAME'\n	else\n		# If file doesn't exist, issue warning\n		echo \n		echo '$FILE_NAME, does not exist.'\n		echo 'Obviously, I will not include it in this archive.'\n		echo 'It is listed on line $FILE_NO of the config file.'\n		echo 'Continuing to build archive file.'\n		echo\n	fi\n#\n	FILE_NO=$[ $FILE_NO + 1 ]	# Increase Line/File number by one\n	read FILE_NAME				# Read next record.\ndone",
      ];

      var allFunctionSelect = allFunction[Math.floor(Math.random() * allFunction.length)];
      var i = 0;
      var error = 0;
      var pourcentage = 100/13;
      var pourcent = 0;

      $("#terminal__prompt--input").on('keypress',function(e) {
        if(e.which == 13) {
            if ($(this).val() == $(".terminal__prompt--command").text()) {
              console.log("ok");
              $(this).val("");

              blockCommand();
              commandType();
            } else {
              error += 1;
              if (error == 3) {
                systemDown();
              }
            }
        }
      });

      function blockCommand() {
        let numberCharactere = allFunctionSelect.length/13;
        $(".terminal__prompt--clone.first").find(".terminal__prompt--text").text($(".terminal__prompt--clone.first").find(".terminal__prompt--text").text()+allFunctionSelect.substr(i, numberCharactere));
        $('.terminal__body1').animate({scrollTop: $('.terminal__body1')[0].scrollHeight},"slow");
        i += numberCharactere;
        pourcent += pourcentage;
          console.log(pourcent);
        progressBar.setValue(pourcent);
      }

      function commandType() {
        let array = ['perl ../import-dir.pl [-v] -m Research-V7',
          'awk "/manager/{print}" private.key',
          'awk "{ if (length($0) > max) max = length($0) } END { print max }" private.key',
          'find "$HOME/" -name private.key -print ',
          '/usr/bin/time -f "FORMAT" -p command',
          '/usr/bin/time -f "CPU Percentage: %P" find /etc/ -type f -iname',
          'grep -A 5 "Initializing CPU#1" dmesg',
          'find -iname "MyCProgram.c" -exec md5sum {} \\;',
          'sed -e "s/oldstuff/newstuff/g" remotehost > MyCProgram.c',
          'export ORACLE_HOME=/u01/app/oracle/product/10.2.0',
          'df -H | grep -vE "^Filesystem|tmpfs|udev"',
          'netstat -nap | grep 22',
          'cd ~/Desktop/shell-lesson-data',
          'cmp a.out /usr/fort/fc1',
          'ar r /lib/filib.a io.o',
          'as fhd.s fx1.s; mv a.out fx1.o',
          'chdir /usr/source/salloc; pwd; time sh run',
          'ps aux | egrep "[t]uxpaint"',
          'awk "{ print $5 " " $1 }" | while read -r output;'];

        $(".terminal__prompt--command").text(array[Math.floor(Math.random() * array.length)]);
      }

      function systemDown() {
        var diff = (6*60*60*1000);

        function updateETime() {

          function pad(num) {
            return num > 9 ? num : '0'+num;
          };

            hours = Math.floor( diff / (1000*60*60) ),
            mins = Math.floor( diff / (1000*60) ),
            secs = Math.floor( diff / 1000 ),

            days = Math.floor( diff / (1000*60*60*24) ),
            hh = hours - days * 24,
            mm = mins - hours * 60,
            ss = secs - mins * 60;

            document.getElementById("countdown_time")
                .innerHTML =
                    pad(hh) + ':' +
                    pad(mm) + ':' +
                    pad(ss) ;
            
            diff -= 1000;
        }
        setInterval(updateETime, 1000 );

      }

      function commandText() {
        let val = "";
        let array = [];

        return val;
      }

      function disableselect(e) {
        return false;
      }

      function reEnable() {
        return true;
      }

      document.onselectstart = new Function("return false");

      if (window.sidebar) {
        document.onmousedown = disableselect;
        document.onclick = reEnable;
      }
    </script>
  </body>

<?php
  echo Footer_HTML();
?>