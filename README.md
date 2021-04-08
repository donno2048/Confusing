Print 1 in every position **except** position number 1 (where it supposed to print 1)

You can give it an input as a command line argumet, this will be the number of ones printed.

Download from the terminal:

```bash
$ wget https://raw.githubusercontent.com/donno2048/Confusing/main/Main.java
```

Try looking in the terminal to see what is going on:

```java
$ cat Main.java
import java.lang.reflect.Field;
import java.util.Random;
public class Main {


        public static int j = 100;
        public static void main(String[] args) {


                if (args.length > 0 && args[0].length() > 0)
                        j = Math.min(Integer.parseInt(args[0]) + 1, j);
                for(int i = 1; i < j; i ++)
                        System.out.printf("%d", i);


       }


}



$ javac Main.java
$ java Main;echo
211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
$ java Main 10;echo
2111111111
```
