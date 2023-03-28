public class Singleton {
    private static final Singleton INSTANCE = new Singleton();

    private Singleton() {}

    int value;

    public static int getValue() {
        return value;
    }

    public static void setValue(int value) {
        this.value = value; 
    }

    private static void createInstance() {
        if(INSTANCE == null) {
            synchronized(Singleton.class) {
                if(INSTANCE == null) {
                    INSTANCE = new Singleton();
                }
            }            
        }
    }

    public static Singleton getInstsance() {
        return INSTANCE;
    }

}