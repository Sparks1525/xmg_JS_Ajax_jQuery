package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {


    @RequestMapping("/ajax/login")
    public void login(HttpServletRequest request){

        String username = request.getParameter("username");

        String password = request.getParameter("password");

        System.out.println("username:" + username + ",password:" + password);

    }

}
