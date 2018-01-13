function format(uptime) {
    var uptimeMin = Math.floor(uptime / 60);
    var uptimeS = Math.round(uptime % 60);
    var uptimeH = Math.floor(uptimeMin / 60);

    if (uptimeMin < 60) {
      return (uptimeMin + ' min ' + uptimeS + ' s');
    }
    else {
      var uptimeMin = (Math.floor(uptime / 60) - (uptimeH * 60));
      return (uptimeH + ' h ' + uptimeMin + ' min ' + uptimeS + ' s');
    }
}

exports.format = format;
