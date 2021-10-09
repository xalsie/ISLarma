<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

$IncludeHeader = '<script src="/assets/js/app-angular.js&v1.0"></script>';
$IncludeHeader .= '<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>';

$IncludeHeader .= '<script src="https://unpkg.com/freezeframe/dist/freezeframe.min.js"></script>';
$IncludeHeader .= '<script src="./ascii-progress.js"></script>';

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
?>

 <style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono'); 
body {  
  background: linear-gradient(45deg, #57003f 0%,#f57453 100%); 
  font-family: Ubuntu;
  line-height: 1;
}
/* Works on Firefox */
* {
  scrollbar-width: auto ;
  scrollbar-color: #403e3a #ffffff00;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #ffffff00;
}

*::-webkit-scrollbar-thumb {
  background-color: #403e3a;
  border-radius: 10px;
  border: 0;
}
#container {  
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    flex-wrap: nowrap;
} 
#terminal {  
  width: 70vw;  
  height: 65vh;  
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
} 
.terminal__bar {  
  display: flex;  
  width: 100%;  
  height: 30px;  
  align-items: center;  
  padding: 0 8px;  
  box-sizing: border-box;  
  border-top-left-radius: 5px;  
  border-top-right-radius: 5px;  
  background: linear-gradient(#504b45 0%,#3c3b37 100%);
} 
.bar__buttons {  
  display: flex;  
  align-items: center;
} 
.bar__button {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  padding: 0;  
  margin-right: 5px;  
  font-size: 8px;  
  height: 12px;  
  width: 12px;  
  box-sizing: border-box;  
  border: none;  
  border-radius: 100%;  
  background: linear-gradient(#7d7871 0%, #595953 100%);  
  text-shadow: 0px 1px 0px rgba(255,255,255,0.2);  
  box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
}
.bar__button:hover {  
  cursor: pointer;
}
.bar__button:focus {  
  outline: none;
}
.bar__button--exit {  
  background: linear-gradient(#f37458 0%, #de4c12 100%);    
  background-clip: padding-box;
} 
.bar__user {   
  color: #d5d0ce;  
  margin-left: 6px;  
  font-size: 14px;  
  line-height: 15px;
  margin-top: initial;
  margin-bottom: 0;
} 
.terminal__body, .terminal__body1 {  
  background: rgba(56, 4, 40, 0.9);  
  font-family: 'Ubuntu Mono';  
  height: calc(100% - 30px);  
  padding-top: 2px;  
  margin-top: -1px;
  overflow-y: scroll;
} 
.terminal__prompt {  
  display: flex;
}
.terminal__prompt--user {  
  color: #7eda28;
}
.terminal__prompt--location { 
  color: #4878c0;
}
.terminal__prompt--bling {  
  color: #dddddd;
}
.terminal__prompt--cursor {  
  display: block;  
  height: 17px;  
  width: 8px;  
  margin-left: 9px;  
  animation: blink 1200ms linear infinite;
} 
@keyframes blink {  
  0% {    
    background: #ffffff;  
  }  
  49% {    
    background: #ffffff;  
  }  
  60% {    
    background: transparent;  
  }  
  99% {    
    background: transparent;  
  }  100% {    
    background: #ffffff;  
  }
} 
@media (max-width: 600px) {  
  #terminal {    
    max-height: 90%;    
    width: 90%;  
  }
}

input:focus-visible {
    outline: 0;
}

.terminal__prompt--text {
  color: #fff;
  margin-left: 5px;
  background-color: #f000;
  border: 0;
}

.terminal__prompt--command {
  padding: 5px 15px;
  color: #000;
  background-color: #2e8b57;
  font-family: 'Ubuntu Mono';
  margin-top: 5px;
}

#bootloader-gif.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
}

#myProgress {
  width: 99%;
  position: relative;
  bottom: 20px;
  color: white;
  font-family: 'Ubuntu Mono';
}

#myBar {
  width: 97%;
  line-height: 1.2;
  position: absolute;
  margin: 0 -11px 0 10px;
}

#progressbar {
    position: absolute;
    width: 101%;
}
</style> 
</head>
<body style="overflow: hidden;">
    <!-- Body Section -->

    <main class="container" id="bootloader-gif" style="background-color: #111113; overflow: none;">
      <div class="row justify-content-md-center align-items-center">
        <img id="bootloader-gif--id" src="./1_maDrNlkweHWnmSitCGjj0A.gif" alt="gif boot" autoplay="false" preload="auto" width="400" />
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
        "main() {\n    check_dir $install_log_path $install_path\n    check_yum_command wget wget\n    check_yum_command make make\n    yum_install_software curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker\n    download_file $URL\n\n    software_name=$(echo $URL|awk -F'/' '{print $NF}'|awk -F'.tar.gz' '{print $1}')\n    for filename in `ls $download_path`;do\n        extract_file ${download_path}$filename\n    done\n\n    source_install_git ${software_name}\n    mv /usr/bin/git /usr/bin/git.bak\n\n    rm -fr ${download_path}\n    config_env ${install_path}git/bin\n}",
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
        let array = ['list','ls','grep','more','cat','head','vi','emacs','xemacs','diff','ip','lpr','lpc','lpq','lprm','gv','a2ps','cal','date','wc','spell','read','pwd','mkdir','ls','tar tzvf','whoami','ping','mount','system','make','chmod','cd','rm','which','find','man','chown','chgrp','startx','gzip','killall','kill 592'];

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
    </script>
  </body>

<?php
  echo Footer_HTML();
?>