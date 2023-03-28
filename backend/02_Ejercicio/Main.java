import java.io.*;

public class Main {
    public static void main(String [] args) {
        Singleton singleton = Singleton.INSTANCE;
        System.out.println(singleton.getValue());
    }
}