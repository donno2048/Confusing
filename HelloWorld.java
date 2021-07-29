import java.util.Random;

public class HelloWorld

{

        public static void main(String[] args)

{

}public static String randString(int seed){Random random=new Random(seed);StringBuilder sb=new StringBuilder();//                                                                                                                
for (int i = random.nextInt(27); i != 0;) {sb.append((char)('`'+i));i=random.nextInt(27);}return sb.toString();//                                                                                                                 
}/*\u002a\u002fs\u0074\u0061\u0074\u0069\u0063{System.out.println(randString(-229985452)+" "+randString(-147909649));}//}                                                                                                                        
\u002f\u002a*/}//                 
