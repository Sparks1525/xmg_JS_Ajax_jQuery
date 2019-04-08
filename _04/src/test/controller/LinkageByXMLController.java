package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import test.domain.City;
import test.domain.Province;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.util.List;

@Controller
public class LinkageByXMLController {

    @RequestMapping("/linkage/xml_getProvinces")
    public void getProvinces(HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        //把所有的省份存储在内存中的Document文档中
        Document doc = DocumentBuilderFactory.newInstance()
                .newDocumentBuilder().newDocument();
        doc.setXmlVersion("1.0");
        Element root = doc.createElement("datas");
        doc.appendChild(root);
        List<Province> provinces = Province.getAllProvince();
        for(Province p : provinces){
            Element dataEl = doc.createElement("data");
            dataEl.setAttribute("id", p.getId() + "");
            dataEl.setTextContent(p.getName());
            root.appendChild(dataEl);
        }

        // 同步:把内存中的Document文档数据同步到客户端
        TransformerFactory
                .newInstance()
                .newTransformer()
                .transform(
                        new DOMSource(doc),
                        new StreamResult(response.getWriter()));
    }

    @RequestMapping("/linkage/xml_getCitysByPid")
    public void getCitysByPid(HttpServletRequest request, HttpServletResponse response) throws Exception{

        response.setContentType("text/text;charset=UTF-8");

        Long pid = Long.parseLong(request.getParameter("pid"));

        List<City> citys = City.getCityByProvinceId(pid);

        // 把所有城市存储在内存中的Document文档中
        Document doc = DocumentBuilderFactory.newInstance()
                .newDocumentBuilder().newDocument();
        doc.setXmlVersion("1.0");
        Element root = doc.createElement("data");
        doc.appendChild(root);
        for(City c : citys){
            Element dataEl = doc.createElement("data");
            dataEl.setAttribute("id", c.getId() + "");
            dataEl.setTextContent(c.getName());
            root.appendChild(dataEl);
        }

        // 同步:把内存中的Document文档数据同步到客户端
        TransformerFactory
                .newInstance()
                .newTransformer()
                .transform(
                        new DOMSource(doc),
                        new StreamResult(response.getWriter()));

    }


}
