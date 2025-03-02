import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

export interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hca/68542300454942.jpg?format=gallery-large',
      name: 'Наушники Samsung Galaxy Buds Live черный',
      description: 'Galaxy Buds Live мягко сидят в ухе, обеспечивая вам комфортное ношение с минимальным утомлением в течение всего дня. Оцените удобство приницпиально нового эргономичного дизайна с двумя размерами вкладышей для идеальной посадки.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-live-chernyi-100491521/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hea/86009480085534.jpg?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ сиреневый',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. В нем гармонично сочетаются стильный дизайн, материалы премиум-класса, топовая «начинка», камера профессионального уровня.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-sirenevyi-109192080/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/he5/85907055181854.jpg?format=preview-large',
      name: 'Heimish All Clean Balm гидрофильный щербет 120 мл',
      description: 'All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко. Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-gidrofil-nyi-scherbet-120-ml-118982371/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h1f/86241006256158.jpg?format=gallery-medium',
      name: 'Skin1004 ампульная сыворотка Madagascar Centella Ampoule для лица 55 мл',
      description: 'Успокаивающий экстракт с центеллой Madagascar Centella Ampoule интенсивно регенерирует и успокаивает вашу кожу. Запускает процессы восстановления и оздоровления кожи на клеточном уровне.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/skin1004-ampul-naja-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h51/h8f/85882439598110.jpg?format=gallery-medium',
      name: 'Книга Киз Д.: Цветы для Элджернона',
      description: 'Жанр: современная мировая проза',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/kiz-d-tsvety-dlja-eldzhernona-118889123/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/had/h09/64123503837214.jpg?format=gallery-medium',
      name: 'Книга Сильвера А.: В конце они оба умрут',
      description: 'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут. ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000',
      
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/pff/9618280.jpg?format=gallery-medium',
      name: 'Round Lab крем Birch Juice Moisturizing SPF 50+ для лица 50 мл',
      description: 'Крем для лица с SPF Round Lab Birch Juice Moisturizing 50 мл — это инновационное средство, разработанное для интенсивного увлажнения и защиты кожи от негативного воздействия ультрафиолетовых лучей.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf-50-dlja-litsa-dlja-zony-dekol-te-50-ml-130415198/?c=750000000',
      
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/he9/64373038743582.jpg?format=gallery-medium',
      name: 'Электрочайник Tefal KO172130 белый',
      description: 'Автоотключение при закипании, Фильтр от накипи, 1.8 л',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/elektrochainik-tefal-ko172130-belyi-102931404/?c=750000000',
      
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hc4/85945574424606.jpg?format=gallery-medium',
      name: 'Укулеле Gmusic G1023 коричневый',
      description: 'Укулеле Gmusic G1023 (коричневый) — это стильный и компактный укулеле, идеально подходящий для начинающих музыкантов и любителей. Инструмент выполнен в красивом коричневом цвете и обладает ярким, насыщенным звучанием.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/gmusic-g1023-korichnevyi-118885190/?c=750000000',
      
    },
    
  ];

  share(product: { link: string }) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(telegramUrl, '_blank');
  }
}
