$("nav a").on("click", function (event){

  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)

  $("nav a").removeClass("link")
  $(this).addClass("link")

  $.ajax({
    url: href,
    success: function (data) {
      $("wrapper").fadeOut(250, function(){
        const newPage = $(data).filter("wrapper").html()

        $("wrapper").html(newPage)
        $("wrapper").fadeIn(250)
      })
    }
  })

})
