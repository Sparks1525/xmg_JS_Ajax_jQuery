package test.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@Controller
public class CheckController {

    private List<String> names = Arrays.asList("will","stef", "lucy");

    @RequestMapping("/ajax/check")
    public void check(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        String username = (String) request.getParameter("username");

        String msg = "恭喜你,该账号可用!";

        if(names.contains(username)){
            msg = "对不起,该账号已经存在!";
        }

        System.out.println("username:" + username + ",msg:" + msg);

        response.getWriter().print(msg);
    }
}
