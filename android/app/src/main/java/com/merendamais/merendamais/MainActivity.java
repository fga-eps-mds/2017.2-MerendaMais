package com.merendamais.merendamais;

import android.os.Bundle;

import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.merendamais.merendamais.generated.ExponentBuildConstants;
import host.exp.expoview.ExponentActivity;

public class MainActivity extends ExponentActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@ronyell/merendamais";
  }

  @Override
  public String developmentUrl() {
    return ExponentBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("21.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
}
