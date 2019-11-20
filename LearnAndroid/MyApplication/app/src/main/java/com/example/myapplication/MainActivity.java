package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.example.myapplication.baaAppBasic.abaBuildFirstApp.BuildFirstAppActivity;

public class MainActivity extends AppCompatActivity {
    public static final String EXTRA_MESSAGE = "com.example.myapplication.MESSAGE";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    private void go(Class<?> activityClass) {
        startActivity(new Intent(this, activityClass));
    }

    public void goToBuildFirstAppActivity(View view) {
        startActivity(new Intent(this, BuildFirstAppActivity.class));
//        this.go(BuildFirstAppActivity.class);
    }
}


