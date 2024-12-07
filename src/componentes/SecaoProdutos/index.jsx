import styles from './SecaoProdutos.module.css';
import Image from "next/image";
import Oculos1 from '../../../public/oculos01.png';
import Oculos2 from '../../../public/oculos02.png';
import Oculos3 from '../../../public/oculos03.png';
import Oculos4 from '../../../public/oculos04.png';

export default function SecaoProdutos() {
    return (
        <section className={styles.secao_produtos}>
            <div className={styles.container_produtos}>
                <div className={styles.produtos_texto}>
                    <h2>Nossos produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>

                <div className={styles.produtos_card}>
                    <div>
                        <h3>Óculos de grau</h3>
                        <Image src={Oculos1}/>
                        <span>R$ 500,00</span>
                    </div>
                    <div>
                        <h3>Óculos transition</h3>
                        <Image src={Oculos2}/>
                        <span>R$ 750,00</span>
                    </div>
                    <div>
                        <h3>Óculos de sol</h3>
                        <Image src={Oculos3}/>
                        <span>R$ 700,00</span>
                    </div>
                    <div>
                        <h3>Óculos infantil</h3>
                        <Image src={Oculos4}/>
                        <span>R$ 500,00</span>
                    </div>
                </div>

                <div className={styles.produtos_info}>
                    <h3>Todos os nossos produtos incluem:</h3>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
    
}