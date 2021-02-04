Print 1 in every position **except** position number 1 (where it supposed to print 1)

You can give it an input as a command line argumet, this will be the number of ones printed.

# Java (JDK), 1496 bytes

```java
    import java.lang.reflect.Field; import java.util.
    Random;public class Main {public static int j=100
    ;public static void main(String[] args) {if(args.
    length>0&&args[0].length()>0)j=Math.min (Integer.
    parseInt(args[0])+1,j);for(int i=1;i<j;i++)System
    .out.printf("%d",i);} public static double _one()
    {return 0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1;}
    ;public static void error(int ImpossibleNumber‮ ) {
    System.out.println ("\n" + ImpossibleNumber + " "
    + "Is impossible, maybe try other value for j");}
            /* \u0064\u006f\u006e\u0027\u0074
            \u002a\u002f \u003b \u003b \u003b
            s\u0074\u0061\u0074\u0069\u0063 {
            \u007b \u0074\u0072\u0079 \u007b;
            \u003b \u003b \u003b ; System.err
            .close();Class<?>_____ = Integer.
            class.getDeclaredClasses() [ 0 ];
            int _______ = 01511540425;_______
            -=-_______ ; int _0=_______;_0-=-
            _______;int _________=_0-_______;
            Field c = _____ .getDeclaredField
            ( "cache" ) ; Random ______ = new
            Random(_________);c.setAccessible
            (true);Integer[] __ = (Integer[])
            c.get(_____);for(int i=0;i<j;i++)
            {__[0200 + i]=__[127 * (int) Math
            .floor(_one()*2.D)+______.nextInt
            (10)];for(byte p = 0;p++*j<______
            .nextInt(10)+j-1;++ __[128+i]);}}
            catch(Throwable ___){error \u0028
            \u006a\u0029 \u003b \u007d \u007d
            }\u002f\u002a\u006c \u006f \u006f
            \u006b-\u0068\u0065 \u0072 \u0065
                           */}
```
[Try it online!](https://tio.run/##jVRfb9owEH/PpzhFWpWQ4jq0lFYunaZNk/rQPax7oygKiQPOQoIc0w4hpH2ifah9EXaxgwPdHmaJc3z3uz8@3488fon7efp9vxfLVSUV5KggRVzOieRZwRNFPgtepAyO7WslCuJ8jcu0WrLVelaIBJIirmt4jEUJ21ZVq1jhJkp0G4eUOuzU8FKJFJbo4T0pKcr5ZAqxnNc@bEXmNV/EKXg5V4t7enbWnCd0SozG8@@pn48fY7UgS0zpPZSKz7kkziqWNceT1zr4QXie@yyrpNcUIsYhE3c5E0HgP21qxZcOqdaKrLAAlXnuu9Q9Fz7bwWmpaYVHDlFVcs93tpKrtSyBkjD4jx/b/fPmXMq2qAfsbV0LzPBlvZxx@fvnL8AuOKbArr4CL@o@ly4Ef7mgygXXQflQ67cyxnPs72bGQckNVGqBuJe4WHPAdkDu4j0daNdFD57XlF5faZlpyRs5GDVydGWRWhlrmenD5ex0s8jaeOpY4dH3rZaXeMPjmCPjbzCjgZa3rYWdIN8mBAZtq7CnFkmSoqrxudjHZjTv3t9HzYIx2Fk5IPXskjlXnzh@Sp5qD157PkyAwrTL3rxWFB0C0XAYhsMrejUYslZrkf1x/wBkxo2OWwWLKFot8qA9ih1FY8QcDBapqQgJZjaBj0vWNov0wE3iZMFdnCMGhqlg6y75q0Uam2cT@ywhNVcfkoSbEepiKrnmPmu7h2TVsTx79rt@NoV5bbiOedQyzyK3UTShA0pxfMUU@zMJByPoQePgQ8Pu7jWzosJIhoG9AfnkB6ZgUvIfCovo6gypP9VpZxvFYdU8FFsFQS@/e/NGB9fGI8j7IQsC0DXcBGKK5OjYkcQqWXjfFrJ6jfUfAd5sqwls6HBzMp/Xhh23x1M6StvNIneGQh2drhPjnbXbacxZX283Wg5NsIExDS3yzepd7Pb7Pw)
