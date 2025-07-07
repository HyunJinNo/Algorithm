import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        BigInteger a = new BigInteger(br.readLine().trim());
        BigInteger b = new BigInteger(br.readLine().trim());
        BigInteger c = new BigInteger(br.readLine().trim());
        br.close();

        System.out.print(b.subtract(c).divide(a));
    }
}