package com.jovialcode.blogapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogController {

    @RequestMapping("/")
    public String getUser() {

        return "user Information";
    }
}
