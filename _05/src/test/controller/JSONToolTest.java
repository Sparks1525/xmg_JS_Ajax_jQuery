package test.controller;

import com.alibaba.fastjson.JSON;
import net.sf.json.JSONSerializer;
import org.junit.Test;
import test.domain.Province;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JSONToolTest {


    @Test
    public void testJSONLib() throws Exception{
        List<Province> provinces = Province.getAllProvince(); // 多个对象
        Province p = provinces.get(0);// 单个对象
        // 把单个对象转换为JSON字符串:JSONObject
        // {"id" : 1, "name" : "四川}
        System.out.println(JSONSerializer.toJSON(p));
        // 把多个对象(集合)转换JSON字符串:JSONArray
        // [{"id":1,"name":"四川"},{"id":2,"name":"广东"},{"id":3,"name":"陕西"}]
        System.out.println(JSONSerializer.toJSON(provinces));

        //支持把Map转换为JSON格式
        Map<String,Object> map = new HashMap<>();
        map.put("id",123L);
        map.put("name","XXX");
        System.out.println(JSONSerializer.toJSON(map));
    }


    @Test
    public void testFastJSON() throws Exception{
        List<Province> provinces = Province.getAllProvince(); // 多个对象
        Province p = provinces.get(0);// 单个对象
        // 把单个对象转换为JSON字符串:JSONObject
        // {"id" : 1, "name" : "四川} com.alibaba.fastjson包中
        System.out.println(JSON.toJSONString(p, true));
        // 把多个对象(集合)转换JSON字符串:JSONArray
        // [{"id":1,"name":"四川"},{"id":2,"name":"广东"},{"id":3,"name":"陕西"}]
        System.out.println(JSON.toJSONString(provinces));
        //支持把Map转换为JSON格式
        Map<String,Object> map = new HashMap<>();
        map.put("id",123L);
        map.put("name","XXX");
        System.out.println(JSON.toJSONString(map));
    }

}
