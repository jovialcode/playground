package com.frontend.lab.reactjs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class MainController {

    @GetMapping("/")
    public String defaultView () {
        return "index";
    }

    @GetMapping("/{directory}/{page}")
    public String allViewMapping(@PathVariable String directory, @PathVariable String page) {
        return directory + "/" + page;
    }
}
