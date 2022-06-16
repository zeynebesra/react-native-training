# State ve Lifecycle


State

React ortamında tanımlanan değişkenlere state adı verilir.

Componentlerin belirli bir yaşam döngüleri vardır. Ekrana basılan herhangi bir component ne zaman yenilenmesi gerektiğini yaşam döngüsünün tetiklemelerine göre belirler. Herhangi bir T anında hiç bir değişikliğe uğramamış bir component kendini yenilemez.
Biz bu değişimleri tetiklemediğimiz sürece.

Lifecycle

Her componentin bir yaşam süreci vardır. Doğar, yaşar ve ölür. Biz geliştirme sürecinde bu componentlerin yaşam evrelerini yönetiriz.

Örneğin bir componentin oluşturulduğu anda bir endpoint'ten veri çekmesini isteyebiliriz ya da kaldırıldığı, yok edildiği anda bir işlem gerçekleştirmesini isteyebiliriz. İşte React bize bu evrelerde kullanabileceğimiz özel yapıları sunuyor.

Functional componentlarda yaşam evrelerinde büyük rol oynayan hook useEffect hooku dur.
