package com.jovialcode.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
public class Oauth2AuthorizationConfig extends AuthorizationServerConfigurerAdapter {
    @Autowired
    private DataSource dataSource;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.jdbc(dataSource).passwordEncoder(passwordEncoder)
                .withClient("testClientId")
                .secret("testSecret")
                .redirectUris("http://localhost:8080/oauth2/callback")
                .authorizedGrantTypes("authorization_code")
                .scopes("/game", "write")
                .accessTokenValiditySeconds(30000);
    }
}