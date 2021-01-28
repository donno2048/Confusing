import java.lang.reflect.Field; import java.util.
Random;public class Con1 {public static int j=100
;public static void main(String[] args){for(int i
= 0 ; i < j ; i ++) System.out.printf ("%d", i);}
public static void error (int ImpossibleNumber) {
System.err.println ("\n" + ImpossibleNumber + " "
+ "Is impossible, maybe try other value for j");}


static {try {Class cache=Integer.
class.getDeclaredClasses() [ 0 ];
Field  c = cache.getDeclaredField
( "cache" ) ; Random random = new
Random(441287210);c.setAccessible
(true);Integer[]array=(Integer[])
c.get(cache);for(int i=0;i<j;i++)
array[128+i]=random.nextInt(10);}
catch (Throwable e) {error(j);}}}
