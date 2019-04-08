package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import test.domain.City;
import test.domain.Province;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class LinkageByHtmlController {

    // 加载所有的省份

    /**
     * HTML片段:
     * <option value='1'>四川</option>
     * <option value='2'>广东</option>
     * <option value='3'>陕西</option>
     */
    @RequestMapping("/linkage/html_getProvinces")
    public void getProvinces(HttpServletResponse response) throws Exception {

        response.setContentType("text/text;charset=UTF-8");

        StringBuilder sb = new StringBuilder(200);
        List<Province> provinces = Province.getAllProvince();
        for (Province p : provinces) {
            sb.append("<option value='" + p.getId() + "'>").append(p.getName())
                    .append("</option>");
        }

        System.out.println("sb:" + sb);
        response.getWriter().print(sb);
    }

    // 根据选择的省份的ID，再去加载该省份的城市

    /**
     * <option value='1'>广州</option>
     * <option value='2'>深圳</option>
     * <option value='3'>佛山</option>
     */
    @RequestMapping("/linkage/html_getCitysByPid")
    public void getCitysByPid(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        Long pid = Long.parseLong(request.getParameter("pid"));

        StringBuilder sb = new StringBuilder(300);
        List<City> citys = City.getCityByProvinceId(pid);

        for(City c : citys){
            sb.append("<option value='" + c.getId() + "'>").append(c.getName()).append("</option>");
        }

        response.getWriter().print(sb);
    }


}
