// input String에서 앞과 중복되는 문자 제거 
package step01;

import java.io.InputStream;
import java.util.Scanner;

public class InputOutput2 {

  public String removeString(String str) {
    String newStr = "";
    for(int i = 0; i < str.length()-1; i++) {
      if(i == 0) newStr += str.charAt(0);
      char ch = str.charAt(i);
      char nextCh = str.charAt(i+1);
      if(nextCh != ch) {
        newStr += nextCh;
      }
    }
    return newStr;
  }
  public static void main(String[] args) {
    InputOutput2 io = new InputOutput2();
    InputStream in = System.in;
    Scanner keyScanner = new Scanner(in);
    String str = keyScanner.nextLine(); 
    System.out.printf("==>%s\n", io.removeString(str));
    
//    keyScanner.close();
//    in.close();

  }

}
