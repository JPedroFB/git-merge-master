

public class Company {

    String cor;
    String marca;

    Company(String cor, String marca){
        this.cor = cor;
        this.marca = marca;
    }

    public void imprime(){
        System.out.println(this.marca +" : "+ this.cor);
    }

}
