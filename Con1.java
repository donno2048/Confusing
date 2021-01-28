import java.lang.reflect.Field; import java.util.
Random;public class Con1 {public static int j=100
;public static void main(String[] args){for(int i
= 0 ; i < j ; i ++) System.out.printf ("%d", i);}
public static void error (int ImpossibleNumber‮) {
System.err.println ("\n" + ImpossibleNumber + " "
+ "Is impossible, maybe try other value for j");}
static {try {Class _____=Integer.
class.getDeclaredClasses() [ 0 ];
Field c = _____ .getDeclaredField
( "cache" ) ; Random ______ = new
Random(441287210);c.setAccessible
(true);Integer[] ____=(Integer[])
c.get(_____);for(int i=0;i<j;i++)
____ [128+i]=______.nextInt(10);}
catch (Throwable __){error(j);}}}
