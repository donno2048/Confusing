Print 1 in every position **except** position number 1 (where it supposed to print 1)

# [Java (JDK)](http://jdk.java.net/), 1067 bytes

```java

    import java.lang.reflect.Field; import java.util.
    Random;public class Main {public static int j=100
    ;public static void main(String[] args){for(int i
    = 1 ; i < j ; i ++) System.out.printf ("%d", i);}
    public static double _one () { return 0.1 + 0.1 +
    0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1; };
    public static void error (int ImpossibleNumber‮) {
    System.err.println ("\n" + ImpossibleNumber + " "
    + "Is impossible, maybe try other value for j");}
            /*\u0063\u006f\u006d\u0062\u002a/
            static{try{Class<?>_____=Integer.
            class.getDeclaredClasses() [ 0 ];
            Field c = _____ .getDeclaredField
            ( "cache" ) ; Random ______ = new
            Random(441287210);c.setAccessible
            (true);Integer[] __ = (Integer[])
            c.get(_____);for(int i=0;i<j;i++)
            {__[128 + i] = __[127 * (int)Math
            .floor(_one()*2.D)+______.nextInt
            (10)];for(byte p = 0;p++*j<______
            .nextInt(10)+j-1;++ __[128+i]);}}
            catch (Throwable ___){error(j);}}
            /\u002a\u0062\u006d\u006f\u0063*/
                            }
```
[Try it online!](https://tio.run/##hVLdatswFL73UxwMAztuFScta0HJxlgZ9KK7WHeXhqDYJ4k8Rw6ynC6YwJ5oD7UXyY4lYydlMF0cWzrfd36/TOzFdZb@OJ3kdldoAxk9sFyoNdO4yjEx7IvEPOVw7q@MzJn3Tai02PJdtcxlAkkuyhKehFRQt0@lEYY@UhFtOopjj1869oVMYUuM4NloqdazOQi9LsN6VeigYUlvCiOg3DCBzH6jKITnQ2lwy4rKsB3RzAoC/13qX4EM@dG7TJEWdEVYFAohCKEGjabSCmI2gshZ7@z//5bDkXv/aAO1LjTYqh9pUmUpKe/XartE/efXb6DUXls3IV3duaLCX5RPgd9S6MkH3yP7WNrJO@cVTeuwRDD6AIXZEG4v8gqB5gWZ33QP7RkOXqo4fn9j7cra1NpxY8di2CFdEzWFrD83K5x8/LBozvRRGVyjZh3Sbpit0Twg/WpMLR5LmusMYpjzDmklAwlMwYaCc5L1dcgA/EQkG/RpQhycohxpQWyFrx3S@YLb29H4/m48ikOesBLNpyRBN5w@ptEVhrytn0RlYwXdPew7agoLbLaQd6KbxlxOMi5Jax2yXixmlJj2Iue2LbrdwcAuPHwSZtMh2SovKFKjuCAcjNlDGLl@mMKfhoro66Qm5jbt8mAQdhQ35rsoGmQTx@hjttSGEWXXIx5FroT7SM5p7f3eE2GSDQTfN7p4FVb51FptxRlkF8ihE0IvilYgTiw3g14hb8/xdPoL)
