var d=new Date()
    var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                    "Friday","Saturday")
    var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
                    "Sep","Oct","Nov","Dec")
    document.write(weekday[d.getDay()] + " ")
    document.write(d.getDate() + ", ")
    document.write(monthname[d.getMonth()] + " ")
    document.write(d.getFullYear())
    document.getElementById("day").innerHTML = d;