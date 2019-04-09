package test.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CheckController {

    private List<String> names = Arrays.asList("will","stef", "lucy");

    @RequestMapping("/ajax/check")
    public void check(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        String username = request.getParameter("username");


        Map<String,Object> jsonMap = new HashMap<>();

        if(names.contains(username)){
            jsonMap.put("success", false);
            jsonMap.put("msg", "对不起,该账号已经存在!");

        } else {
            jsonMap.put("success", true);
            jsonMap.put("msg", "恭喜你,该账号可用!");
        }

        System.out.println("jsonMap:" + jsonMap);

        response.getWriter().print(JSON.toJSONString(jsonMap));
    }
}
