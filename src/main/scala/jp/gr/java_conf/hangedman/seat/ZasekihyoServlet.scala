package jp.gr.java_conf.hangedman.seat

import org.scalatra._
import scala.xml.{Text, Node}
import scalate.ScalateSupport

class ZasekihyoServlet extends ZasekihyoStack {

  private def displayPage(title:String, content:Seq[Node], scripts: Seq[String]) 
    = Template.page(title, content, scripts)

  get("/") {
    <html>
      <body>
        <h1>Hello, world!</h1>
        Say <a href="hello-scalate">hello to Scalate</a>.
      </body>
    </html>
  }

  get("/manage") {
    displayPage("管理用ページ",
    <p>管理用ページ</p>,
    Seq("/assets/js/highcharts.js")
  )}

}

object Template {

  def page(title:String, content:Seq[Node], scripts: Seq[String]) = {

    <html lang="ja">
      <head>
        <title>{ title }</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <!-- Le styles -->

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
          <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
      </head>

      <body>
           
	  { content }

          <!-- Le javascript
          ================================================== -->
          <!-- Placed at the end of the document so the pages load faster -->
          { (scripts) map { pth =>
            <script type="text/javascript" src={pth}></script>
          } }

      </body>
    </html>
  }
}
