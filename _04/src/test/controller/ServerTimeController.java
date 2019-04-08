package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import javax.servlet.http.HttpServletResponse;

@Controller
public class ServerTimeController {

    @RequestMapping("/ajax/getServerTime")
    public void getServerTime(HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        // 服务端的时间
        String time = new java.util.Date().toLocaleString();
        //向客户的输出内容
        Thread.sleep(3000);
        response.getWriter().print(time);
    }
}
