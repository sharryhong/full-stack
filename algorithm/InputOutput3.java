// input String에서 한번이라도 중복되는 문자 제거 
// 예: aabbbccd -> abcd, hellojavaooe -> helojav
package step01;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Scanner;

public class InputOutput3 {

  public String removeString(String str) {
    ArrayList arr = new ArrayList();
    String newStr = "";
    for(int i = 0; i < str.length(); i++) {
      if(i==0 || !arr.contains(str.charAt(i))) {
        arr.add(str.charAt(i));
        newStr += str.charAt(i);
      }
    }
    
    return newStr;
  }
  public static void main(String[] args) {
    InputOutput3 io = new InputOutput3();
    InputStream in = System.in;
    Scanner keyScanner = new Scanner(in);
    String str = keyScanner.nextLine(); 
    System.out.printf("==>%s\n", io.removeString(str));
    
//    keyScanner.close();
//    in.close();

  }

}
