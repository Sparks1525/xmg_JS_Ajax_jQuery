package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import test.domain.City;
import test.domain.Province;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class LinkageByJSONController {

    @RequestMapping("/linkage/json_getProvinces")
    public void getProvinces(HttpServletResponse response) throws Exception{

        response.setContentType("text/json;charset=utf-8");

        StringBuilder sb = new StringBuilder(200);
        List<Province> provinces = Province.getAllProvince();
        sb.append("[");

        for(Province p : provinces) {
            sb.append("{");
            sb.append("id:").append(p.getId());
            sb.append(",name:").append("'").append(p.getName()).append("'");
            sb.append("},");
        }
        sb.deleteCharAt(sb.length() - 1);
        sb.append("]");
        System.out.println(sb);

        response.getWriter().print(sb);
    }

    @RequestMapping("/linkage/json_getCitysByPid")
    public void getCitysByPid(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/json;charset=utf-8");

        StringBuilder sb = new StringBuilder(200);

        Long pid = Long.parseLong(request.getParameter("pid"));
        List<City> citys = City.getCityByProvinceId(pid);

        sb.append("[");

        for(City c : citys) {
            sb.append("{");
            sb.append("id:").append(c.getId());
            sb.append(",name:").append("'").append(c.getName()).append("'");
            sb.append("},");
        }
        sb.deleteCharAt(sb.length() - 1);
        sb.append("]");
        System.out.println(sb);

        response.getWriter().print(sb);

    }

}
