package test.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {

    @RequestMapping("/ajax/login")
    public void login(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        Map<String,Object> jsonMap = new HashMap<>();

        if("admin".equals(username) && "1234".equals(password)){
            jsonMap.put("success", true);
        } else {
            jsonMap.put("success",false);
            jsonMap.put("errorMsg","账号或密码不正确!");
        }
        response.getWriter().print(JSON.toJSONString(jsonMap));
    }

}
