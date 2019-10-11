import { Injectable } from '@angular/core';
import { CommonsService } from '../../../../core';
import * as FormBasedDocsApi from '../../../../../assets/js/wodotexteditor/localfileeditor.js';
@Injectable()
export class DocumentCreatorService {

  public defaultUri = 'data:application/vnd.oasis.opendocument.text;base64,UEsDBAoAAAAAAIiaSE9exjIMJwAAACcAAAAIAAAAbWltZXR5cGVhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHRQSwMECgAAAAAAiJpIT50YFElaEQAAWhEAABgAAABUaHVtYm5haWxzL3RodW1ibmFpbC5wbmeJUE5HDQoaCgAAAA1JSERSAAAAxgAAAQAIAwAAAN+D+XIAAAMAUExURU9PUVRTVlVUWlhWXFtZXExSYFtfaF1ibFxocWRPSGJRTGJaUmxkXmJkZWJka2VpbGplZWlmaGxoZ2xqa2Rpc2ZufWxvd2xye3FsbHlsZnlua3ZvcnxzbHJycnR0e3d4d3V6fnt0c3t0eXx4cXx6fG50gXB2hHR6g3Z7iXx8g32BhXuBjHaFlnyEk3yNlH+Kmn+RoIZ8coR9e4p/e4WAfYyAfZOHfoSChIOEioWIjoqDg4iGi46Jg4uJjICFkISKk4KNnIqElomLkouNmY6RlYuSm5GHgpKLhJKNjJqNhpKNlJSQjpqQg5yUjJyYjZKRlZOUm5SYnJqVlJqVmJyZlpuanIuWppSWo5Sbo5SdqpmWopudo5qcrJ6hn42iq5Ogqp2ipJujq5uqr5aktJattpiluJyssZuqu52yuqWYjaOblKOdnKmcmqOdoqOfqKieoqeinLKmnKSjpKSlq6WopqWpq6ulpKulqqyopaurrKOksaSqsqStuautsqqsuK2wrKWwtKezuqa5vayys62zurKsqrKusbCvuLiusbSwrbuzrLi4qrOztLK0urO6tbS5vLq0s7m0uru5tbu6u622wrK1wLS7w7S9yru9w7u+y77Bu7bAyr3Bw7vCy7zH0sS1psG3rMa4q8G7tMK8usm9s8q/u8K9wcPAvs3BtMvCvdPDtNDGvNbKv9rLvMPCw8LFysXIxcXIy8rDwsrGyMvIxcvKzMHE0sTL08TN2svN0snO2s7QzcbS3MzQ1MzT28zY3dDFwNPJw9LNy93Px9jPzdDO0dPQzNrSxdvTzNPS09PW2tHY1tXZ3NrV09jW2dvZ1tvb28bO4MrW4tLW49Tb49Te6Nvd4dnf69zi597p8uPXzePX1OHa1OHd3Ojb1uDf4Ofh1+Pg3Org1erj3PLn2+Pj4+Ll6ubo5uXp7Onl4+3p5Ovr7OHn8OTr8uru8ufw8+bw+O3x9Oz0+e74+/Hs5/Dv8PPx7fn07PPz9PT2+PP49fb4+vj29Pj3+Pr49v7+/oR3rmgAAA4VSURBVHja7dwPdBv1fQBw4LFm3ZbCyr/1Dfslq7MEXLqRdrMT4JkZPDyYkfJHRkF5jdUSVnDVOdIk5SJfApzkxN6dJfts5Ugkr88qGLfNqTY+lCNIfXbB+DQpuZe6QlBrecaRkX2Vho1zPlmyfjvJgUIpXVPS1kp/P1s//X6/+6P30d1Xd6ff/XQVuCLSVZABGZABGZABGZABGZABGZABGZABGZABGZABGZABGZDx/6fBOZzk8JDonSXmwhiH0kSMpHEcxXn3cIgcceaoGQp0Ehyxqhm5Lzz21+sdG8pbP9N2S/LELdU3uu4sbd31nebNmslrq0rmp8r7rz3zd+Arhp2b5lcz4wXrmus37yzdqLyzvu6V7947dbPB8I9NX/uvvV9BHN0ld7vaNqrqKjcS6/FH7n5zVW8NIEpZKS1lJEkC2TS4ID9JUjYtVzMApORyTlpJMMQhAzIgAzIgAzKuLEaYlbP4a4WyGEnOpEA2KhcFnkkDwBcNw+El3YDqAOQxiqEJyuQmHXYwFmA8FO4lDdaRQHEwjtB7SYCa6RZ9t0mPfluvbDAfmjY5Bw8HdSyKYY3HiyQ2pNwSWJZPJ+VCOg2k7FJOSGVAdhks5zMJhjhkQAZkQAZkQMbvgTHDCqP+cIKLxrg4My0yEh8vRsb3yjfdgN4ZMl1V8wC9saSEL13jLErG5+74S3yzFcGufcC1Yf26U+uQ8mJkCNMxnr8QFFNiPM4nstxSbA6GOGRABmRcVsb3q/eKQBIFQZLArCRIQiwqFCHjxN4/bUr245qGti6x1l1rR/656ukiZAxvw1XT/Vu26FWaxbXGWpW1v9p5T1HHRo58/1sLGOKQARlXCkMSVr6/np0rXOzEC/+rN8w/iTFC6ynGaadpN0H5XSMIyTS6mJ7Bya7iYgw6jppUPVj19IP9u+xWc1O15kl0m++eUFex7VSSICyJgrwXCWK+LCXk85J3LggwxCEDMiADMiADMlY7I39TY6ToGa+vUYPeUjw9wu7EBjzREZy3e2xaR7LYtsatycXbPntTsrRi81f5req6u6tuqOi9f403VWQMTwLQJJkOB0aIuc7Av+7h7KTg9XT6ijrEpSX4SQUZkHElMWY4Kg1AGoje0AdtTD6bHS8mxgi9w4o0G7dXZSZQY4NFb+wy4XrcrtUJzqJidIzb9K+0mxkviVpwuwbzKwxG3I4r/rureGMj54chDhmQARmQARmQUSyMycQvD/p4f/ynEE9fbFmZIxeU21bKglzjU0BM8+BXDRqJcxcLXFRMxfxxhmfjUmiSDcbmGDY1GuSCYCTBRfLdczN+EBWZBMOykU/FEJUBEXextB+EQ7MU7cVx8nEnx5HMANVCoZnFbhL3Ia5nc0ZkeFcXbmWMw/YAoGjag9hpots4yhHdFE6gdhrDo0O0ncLs5PiwLkBbLX0B4NDRBz3I2Q6pMQgMtJkdMuw7aTCzHT/ekrTYtDNVGfDWt71Votky/BMT++l2KgN4S6890OhNNjnH3C2HEANxL4Gb7tLwenSbJSDep0D8FY8Ti8h9Y/d1WQ8jxjqNIXrY2mHe79xB1+9HdFsOYPj23U+RqCJpew7dcwhpOf7cSUdDl327N2WaRlVHkHHzsu4l0N9jpuhhpdNiosy9xldQk55wuKOvHiUdlK5ZZrg/HUPehUYikjSbzGbk/SkjLRWGFcuPtJwH88OOQUpuWCq0ZbNyJkzL2ZKUBvlKYSDyUqEA0itLg6w861JOmpmTl1mWlvOjTaTC3roELq4aiPkpYHZaXgeQq/mRzjDE5URnSIqjeZalRyieYtxMH9ExUJgyCMCZjwTeTAp8tMO8gwW/5x70T2Is3nW248dfXjR62SODKvbRsH7Pwks2L8CdwGNUuds6kMeRbVrHSU/Ahu/s+DfaYOvakVnAUUyvwpGzJsymxZB7VeN/cMZYBLWR9lZfi9sx6CWt5Lh16iWHN02SvkGkNTHIYNZRzNnk6wuRJOZ4jCCP2ZRHF4gOp72TwMc7so2GKE54Aqvk8CdOf6zpV9wTPLpyIBFWY2zAkxHIgAzIgAzIgIxLTGOWrT/U3GWqtjepSHWfiq4mttKNWm8FPV5UjLfrm659uXThOupfru+5AX2CudH18DVNfxutuzpRVIzXtWhvaCtfiT6JNPcGmlxbzNa2/Q0E0ZaEsQEZkAEZkAEZkAEZvwljDPmlr7KzRck48Y2b1x+1PVRa6alZvH3bk4qyu28qL0LGC3dUlkT2Xbemomzd4nUVny/bte9zj5uLMDYK3yQv5f8WtxWegcTBEIcMyICMVcsYG/fq0AjPxPndfZE4J5jG48POEB9PIEBIxGNskAeTPY7M6mUMFn5f25Pq/neHFrMjzl6nzY4oHSqEvIv82vPPkPFq9z6fS6sYeMfdn1ztW2Ni/DV2lvLz3LiYjHF+juJCNOf1h/2MxEfOcAxHzs8G6AyMDciADMiADMiADMi4fIzhGj2YKheANDc0LcWBEJcEYYYVim5r/MXZ3Lo/+5Po39x+61/Z/0FdV6Zcu/6himuOFxtjZyLXWKtJ21CbIqGw11Uh96vOaVVtR4s6NkYvdj1KMMQhAzKuOEY2IXArd0rOBj9oFAvHkA+Ngpdm0qubMTztbdHQtJGlrYkhBsedbjLI9FqoATdnBJPuvhftVgpM9Jw/uVoZQ4UP2OeSB3cMVj11TGe1cOgho/7vsafadhoqsT2tlqf47c02F2a4zX2ma8G9urfGbPTCBSDM5e+gn5MfIp7M31ifTeVzAAQ5ly6AJWkqCUMcMiADMiADMiBjlTJWLv3yA+h+cRn4kcvB7CctJX2sKVfoDpFy6V//gtKnZAwHBJ7JmHUsT/tZLgV4zpuxxhIzwZHwrog+HG+c40/7zgRy3QwIc+fifsDEGS8ZCTLTgI9IvtE4y/HeeCA2xFqY0LCVORdiJSYuNwX5vmDjQKLfTcf5AfK7mnFfeI4PhkMheUUhlgtSDEPLqxH4pMjqQzpfvsIFQyAWkV/Ce6mMsZ94jPpUC61v8LdakCBoRKxJotftmN3B1B/sbKvsfBc/0vfY88CseA9v7fynrgWl5byr84DF7kp73AtOlTJO6rFHSWNMY3na4XjomLa2uf+NQaxdqbWFHyX346Tb7fJ0fYvUqZNtPfb2NkVIOY/bjn3zeVf7/gYv9kxWMecgsXYDoiSxZ2zVbilsWVC50OQlMmY4jmXBaYnhLsjvEfdTng9Kp7n4TJCJsDw7yg9IZ2J+ns/xXolDGD6YY/hIiAn7+ZFAf1RKcPEgF+WiwdhpeXae49kIz2bZyVPquDwvzwxEGd56Jhg9zXBxdjRhHB/xC/IazwX4cyGeCXEsLzqBGDgXYQcru/2RMB/0hgPgtWl+fnWE+PIlL5G+LCHOA+6Dd+C1zIeCdTa1EtI5Bng/Ery2bYnGRCuOP4jr9elZhcGETA8ZcLXHpHQo0SbklJFaVAJJoWuz+IFtXKUfUlsX1Dm9T1SoFPY276FtDkWTxlHj8aC0OqfI7UibELshJUZ/K0a/WmXEFBofZULfxQiT0asVH9w978CNLUa10ntIpaLqjSqNFZnHm+75BjDiNfeoh6q0uFF18ombB66vvwVIpa/X7+sRy7+6uSbzvQ2jJTdNfnlq7Yatmq3jROvVb4LSJyo2/W/u1i+t/wL9mU37r0583grW3r6WxK+3rBM3nriJ/eKakvfEjf1Xny0FDyg7r/u5w6FtPHnpjEGfSW03kwHbjgNJBFd9fUQjIlSKPIZjCH6H4RDWSjxyCkMJ9D2b7QCR/o92u2UQR52UHUl9y/fCj0q3twbL4vcrklO33V+LvtyrbHRvn6iaqK6osOm11cbvNGfLapv2PHsiUFLWqKqp0O47dMAq3iaUGdAJ/e2z5f01Ouf2Vouj0viD+jJbBfKIKeohWdz3W+1U7McKF6PfK33irL+zJCX+qI/iqSlXgpAvs+NSatiQkAReSgEB9KHTGbk4ByYG5KokyNfjZ8ZXMePVBmR7TXOvSq01NQ9b6AYcRbEF9Hg/asMJC4It2Cr3ZGu/3mrZ0+ZrWcUMB+l4eLzb0YpZWzOv/ryj00nj7Qvk8cF32zqP/xBvP09WzJ/f/fTwAdc7HuKKOMO9AE/UIQMyIAMyIAMyrjSGCSGVWK2mF7FvHWrUtt7XOV+UjLpq6c/P3lBZsnTLw9c0bRgtuzFTlIwnUR1eVTH3n4jF2mZS63qaYGxABmRABmRABmRAxm/MmHADwBV+lz8IQIyVczoy4n3RDxiRHTgd4Rh2ZuC0d3qS5fLTPpTiH8pXls6nyfxtZdJc4df2Ymkwk3x/noszhoO/G8Zbu8Bbr7QOMKY3iNHAsCZSmTRpp541DwAHNbF7rKar421k99hJA3J+k/7NurPAZnhZNBJGu93psmn8dqzbkyAxQ4p0HTZbrPTAlMnqbEdszgMU7Yw1WZ3/4yOAretF9NSLlO5pSq96V+ekKZJxhi4340R5z6zTgCOq5GGTc/jlIabZbJh6tuX5zOLetw86frTH5uk86CAOYh4lTvp2AxVpWdSoreg3cXQHgTRYUUXA5LG8gVkRFUa0PPMzfQOG4Y0WiwXFRvQa3892qzO2ev0uHDc9YiH3qdMth60kcqQhctljYwmALJ3J91llC71KhU7kbKEL64Oq9ItnkBZ9cpFOF3qk0he7kV2ZQmWlKV1ozWc5kFsCUnbQubws1zIZedpyJgukDAxxyIAMyLikwx96tC9d/AzHOWT4p8XPGHOznvkrIDYyIANDHDIgAzIgAzIgAzIgAzIgAzIgAzIgAzIgAzIgAzIg4w+b/g/o2fJFIp8zpQAAAABJRU5ErkJgglBLAwQKAAAAAACImkhPJBd0ji0AAAAtAAAADAAAAGxheW91dC1jYWNoZQEAAQBwKQAAAFAJAAAEEgAAAFAJAAAEJAAAAFAJAAAEMAAAAFAJAAAEPwAAAFBLAwQKAAAACADQiUlPm6FXY1EWAADoegAACwAAAGNvbnRlbnQueG1s7V3Ncxs3lv9XUNyqVFxFSiKllmkl1hQj0V6mZElDUcnk5AK7QQp2s9FGd1OSU6na2ducd097Gh9TtTlM5Zbj8D+Zv2Tfe0A3m19iS6Qs2WunIqkbwAPwPn7vA6D07Z+uBj4bCh1JFTwvVTe2SkwErvJk0H9eOu+8qNRLf9r/VvV60hV7nnKTgQjiiquCGL4zBqODaA8eexL6JzrYUzyS0V7AByLai909FYogHbaX771Hc5k3XrfoWI/HvMsjMTHafV66iONwb3MzTLS/oXR/03M3hS9wYLRZ3ahuZn31tld4Lug7MY/ml8XH8ktgYX64e8F1XJhH2Dk/uqeKDr2K/EpPgYgGIY9l1xeTZPSgKCHsmx874PFFxunLy8uNy23idfXZs/rmK2ikL6+Osv4i5kXnwr75uYJk0BX6NloRxdeTWzU6W5SE1fDc+FCLCNqBh2gZxajkx+Rp0eKKEpnZSTQsbFvQdYHkwW6KL4E6T4wWV4V1F/vmx16hIkXzNKe2tVXbNM1ZZ18Gbxdo2bNNas26Dvx5Hf/y6sioJK0x5K4oMSvdHM7VShmq9QDMKj3oV/GE60f73xoBZK+ZeUZyz0tt1VWxKjFgdNpjIP3rXEN+MDZV+iIQWgJIaTXgwUSPUMYu2NSQa4kchzVtTk1+82pkcAGk4znLGbesez2bi9hm3/MkBrqxdCs0NOMnfZ1Y/Wk1m9yuOuSa9zUPL9IGeIH+hh4qZtQxqAv3X9e2Xr+u1V//KLqva89el9JZMgqVUINu6liKyOqLr8ZKrPuZM+upJPCMxRqtFlcwTmIT91NcyFEwqt1TgIe6L4NKrMLnpa2N6u6uI4N8A+gDcCLfZsaT87yKE+5XUD3J0/a4H4l006DkonIhZP8irvC44gsANyRTs/RxdIX7sg+a7MIyhU5HvkmiWPauKxEQBYZdKu1N0R4iS1yY2o5HZ4rzjUU9j4NZI329QaK1LxK9tUQ/imC2vwjmIwvGtJGt5vgDa3aVryC0+bftne36zvYE/k76GOhLbyP5Ht5WtzaccBLQsaEC/pgHi5sxGvDFVdYhW/XUygpr0s7no0kLlOieoBoCpUeD084XIT4mdN79Io4vmLwCJj/9HPTHFz2S83a1tjupRRp1YUa3HijwloEHO7KrMeMw5alMNH5MLK9/Ef5nKPzPFaqerU9bbf8BCEroSsj7afezmIMyau/BneGnUhUwvLM1V1TojwRd1a21a4Mvo8neP/54nAyq/39U4QvszNW0L7XGx6FK+eMWpVRWwceDBPM2PRp4ZivNafkeeudm0pEEFNva2tpxt0R3DQqyxtLlEiha6LdgF0ZsNK1071mv8JByryd9/3kpUEaei6Z/8MDwEceE1iyimOu4iMuFcUqHFzyInpdq9HgpPXWZPd0x0Jzjw4FYl7tv+xplULEIHmuY2ajyUgu37ZdaxrCRykB5oKW+rsTdj2f8q/ueG+Fjuyu8pw/unzoz7gkJlQr44+p2dadaL86T6k3eeG7jeK/Vdex05iTiXneavrsUBjK6yveK7//Smr5pnj92kj1zRmcdaPzK/Jupv9/Iv/vB5qUiyY6f16x9FrhD7pkbSrm6YhcwFqEvdWWrcXmmQF5USz/N+LgzU4F+QK16GBZ+NNWaqdcVYPXHdpnTsBlQnJt3pVPx9y24PwmqKeWl4rkBWC2NlSUzU5t6jEawCFo/MSuYLf0URdheD7Ru65ND2NkKxANq18PwcN3Ktbnwyplt6CrvOntAYowuJyaRqESqF5vcu6sFfxthYpSI/K1APUC104Mc+R7wP8olctgYhv51xRMRZE42QTLN+ZtyQGr/W5o6Eu8SEYwvzc2+NEv0ZBT6/LqikpiSUF8MBeTpIDJqNsJq+T7kmZoUAeebJbbiBJ30FuD6KRvdXz/hQ3Pz+l5ov5D9RC/kx5yXqYBDQyVfCzp9VkpXE/Jgtv0s1oq2cUOfTjVrz6bfb7TbjTN22jxudZrHB63GUfMsbQMi+3N+Dm9Y5c6SFWyn7cQ1MqWU7OwbM+lN5JzSfjNg8ki53Jce98qMM/lCuBf8luuuLlm3s9Z1FxVWu3l+3Do8WUUg1SU7K7qUQ8GSgLOQ61iUH3o99dK+PMWV/CACT3hKzxP3ulb0QLL/iXmCKUDr2/Eci8gYDOxhuI0P1a3dan17a9vZLs1OlB12ZWMrF4KDZ72JX7WU+wfgrzVH9lfHq9icJTV+dQPZYsjwEwO4RCvHWqwMEu7K0e9BmUVCjz4ETIsexDUej8pMBp4cSi/hPoY5AgYMFKNll9lpo91psh+ax4fNw5N2I33ROPzzeavdPIYfVRnZj56YpnqTQKRUztGIPllMacH22j+0msfN4xWMpvYo93YXkJoxmFq1tlV9uutsbznb2/W6tRqrb2nJnOJRigALGZWMxeAmTdkq7f88hWjVCnTTvFL9Za5tGYqFLOtxympd+Ebi2n22VXV2tqu7zkcWVw4CH5m8jnhkoarMRMB8wDETIyGe4SMAKeNuPPqDA35eA3TCewVw+mvgqQjwkuMRF/Z/k+jRb550SVIGeSGH4BoGqa4v+1xHAinALCIKhSu5b3oKHwQMeSjkrwDBCgQODeYjb+Kff1+3Qp02Djon7LDJAMDbzZcN/PE2we0Slv/z71/DBsGh+RzdySmwTjFlv4Mqc6159OSzCDubfzk9+RzdQ2vj7sL/M1gLGM1U5AAKz7DeIEWMn4FDEwh9EYBCqIEMJCkGjIJkP5EUhfRk4PK9W3LTuXlr6cfvXju91xDxiCWM2C3tf+3MU9Siy8kitamaSEZn6vWhhHzM7BziNPy8OGS8CPxJF0DFQ67tPQgXdlfhwpLloNZcMywTqECAGhTHuzts5OnijSxHNQbD2RM2EGBFEXMT7qFDi1B1oyQUuiddKeZZzhId+Vm+QJE3PdkjMf+yOlMLG3prDaYug8jVMqQEA7xjX2LpzLcWTVtD689b9x5rm26p3Z8SNIAP3btP8f8s02mz+X656+7L97vQQx6rqJ3yUkR3Xudt9XG3VLDXz/KAQ8QSFdHWWxA9cRMMp1TQCgaJAK4Vob/Eixa1hh9WswUKH4dSx4ln1DrCEDACiWvaEblA4Qq8Y4TBpp8FnhBeJkJ7GF/6EnwBxIhD5WMqDZpDWXnZBoia5ULDqZiKhSKA6DnAuFLQ3IBLb4SxS07TZRYY3VItHmf8dXA0+uv52flRY5XC3+MMwaob7OS775udk/v1vEd8tqQjonh2N12l3g64fpsv279+qb7j7tvMuNM+S2cdfQCnEQtQYxPVoAvg3rtERtJoa953eALdS0z9QPnFVagiGcuhAjuQA6FVmYVKM19Roka5VUwJm2IYPYk+J+WfjUgDNBFXhMaEGmRCp3kTKptkEBJkzO7uOTSp7qwQm/zrP/+XQXwCNJhIIDp5UoYwxZP8VvmjWcZUxLvMDZokGaIg0RPAcoK4IXgtfEPyAoAb/eYmIJ7qxo6zQ7ntweh3T/YVO5BD6d8hYjqalabNygX+ILtSQ0SJwXQqvTJAnx5K/J0qEwiaHvwqU7IEeQ9GHyKIwaETJOoYkL0HIjpGPYRkvZ9pGaC6cC9ACRNPCsr2NRCFIBYaNj5Z2KltsKMGOzh5ddpuAHM7jdXSnzmCgsTGFEPAKodYw9N58xzDUJkYne/tUglJl28FDSRW9K4hfANBxcqobKw8fM9R9HijQHAcA4Yfcr8M6OGKSGmpygRUfU2lDEhTBP5aHvKgRWS8DICxPtb0IfoFnU1DYVMoG+KNA0oCI/qdQS7q3L3hD57svLb/7gRCuBGLQikdC0QbrOkbu0HDBwsZl7dwzyAy8gIKDRSNCjaOUY51D4jB//qP/2YZ0XlTUI+vFzIRzBvAaA68P0H+hlp5iSs1uKRIDhI/Hn0IhIm5GJ8pyyFto3MJ1mNHf4Bukh5a5aQZN35+1Wo32qx51sGaWrv58vyYfmq0sdZ2dno++tvZvID+04OLbYhSOiftl41XLbBZKioCfDTPDtqtzjns9nT0P98dtQ6oxJgDFfYT67Qbx2evWmet0X8d22EvWscHq+CNc8tyS4HYaKmsUYXo8MuX7zkqEYUi48AeY32b5arofuOHG4o0S+MHjB12sbjhjX6DxQcc94xJxDhhINiMbcEjMqbQk3js5xmUmmtjabnbZ8cKsxnjPs2tHjEf9iPuI4DbAM5W0WEkeKZ53T3RxSNNFqiY6ic6xRRrw/NCv2tyAXgChrju8zToLKPJE16U2VP2dSRFLGZ4Usbd+EkfPRE2AbULpfmiSv58yLhD0NO8GxoxOQjxNfII+9uQOB9hq+4bYQjSZ1jA+RE/rrEH3tCi0EcBGOdi84GMBjwVlpEpvqYab35VIAkAVViRD+wxIqGzLFdFfB1h0nrvyRTFvZ0NdtAA2DsDJHsJoDb666vm8Ur3gebUAc05WXUNBZAH4pKzwYBFnZWu5cDKz8i+MZbX/axgOH0xQWCxA7pEiuJDX0I26WWG7bPWIEwo+IgUFljwTeBqMUhNach9QG6D06wjIJYPTGn32Nr9e87OdZcDZnz91btExd+c+kkEowABzPMThJUEEQKmxoygzykNMsah5ZCSBkpMbZYE35eFGFORBWsSIEYCTwYAYS284isVcHyTHlq6/uhDAqbHczWn7PYHUk0IHOZyk4LjiDhh9xAQeBv00+OqZBk8QOSSo1D2lFqxWIZqetMmj3ZzUMvEoIvyBBoXMCAWLjcuBvI2UysD5FB+AsyRgL4W06GLCRyBc6HP35M7UpNsR3iJSFm4YT4M4JBBBFb0KewB2Eej32zeR7KG5Vr/NiuVTCRRBrR0d8aWvu2KM86AXDDoJQ2SVvWAjSCJCH1ZZLyFGY7ZqvGRi6rioPyBGuDi58trCZIXwdnUzoK5hparDiGrxjsiTeI+sX4s+T7p601VnTLRuYCUXRt+jDXsdo502ttdTxPOC8UEZ5MHFnfh/JgdBVn7lR9/I3sQZD19wp4/f87cC+G+Fd5X/fibAgSerqe8vbtCeXvtlduT44NmFvwftEd/O2xB/vDvrdOTThNca2uVumd9fl2TrA+rBQkgph796kkq+wQAcpjfYyiXQhEeUZMaXnAXFLun03zQZrKmuG9rS1i/f5cQlEAviLbAd0fT5cVF6WkRBVqwHwvhuANMqAEOVVYukJ4yG0iPDW7wKgYCYwlLV1j+upIDOxjjP4jagGdpRNiHCTKfOkAfBH4HKykpP8cchID9TLIUKMYuJSu5zeIhePB0gjILRr8PZIAoize+eXaG4iGi0y1DABLwwYpxcMOSMhAE9F4ioD1HG4KD2N3A6o3Egl0B0QfKUDES9IiZNq8TY5nTsy1SgasCkMNFzYFnTwyVPxQmAp+bJmFhCUtXpDlp5XZBoRLrJKEIKOO0Zzt+397mW1BJu6ZB7+bfzIix4gLpjcdTb+nzAWhMl79RLJBBf/THWJVvgXcFwa22zqz9YeLcxwSs7ebZga2qnB+3jhqdZrtxBBh7xAByO+0GgOyr5mGrgQCy3k80ULk3K3yk9XiIujgk6KnyZacpNg8FpbNOeQbe5pqBOfEErAoQXzGpdWOhFxyBbrAGAMKCGBmoNpYdTZTHwQ1PUT+9Khib0vE8XLYnCdOGFioPIQCLH4Bx2vqCiZR7Cphx2Vl0NVDG/gEoYMtS2bp5WoOZhxUFrbVJ3MDcCRdg12fjrgXSKbPRr5Epf3Hfh6zIpGihwE+bTQgaBX+RdImFNgXj5rrPZFi45HjOiBfQT4z+wX0bXmOsmuYxaUnZ5Eh2L2mxCfYj9LxSULoPq45mF/OECvQ9BZ51nM1M6/GdF/zJVn+fbrDDk1etg9ZR68RUt49POq0XrYPGQetk5XLIKafykams5uwgLfSl4Xus84ZJIjcujewQ0se+CfEnMcQKfnz1wnjyhC4kutKXKKv0TNOaPtW8IjwrCujZkyBAG5Xgpyhcct8YJZqTJGkzxwmTZLQvnAx99pLN4LEULSJBDcs+aDEcfcAbyuPiZ8omPNAAg4UAF9ETohgBAay5UGlM4Q3FNLBxwkEK4iysCMOBC7ymhYekwVBynALXOvo13SuucqoLwuuYDF2GQ/QXNr+yAEJFP9rVBjtIOJ7Dpqcvb9A0MSbng65UNiFbIIYxv5DrWNDIeADiTgJTAEaLDhIxxFSPOGY//OIrc7wL01okxb/mUTYmP14hxUtU905PixVGgRYRTayfC7RvmwPW75IDQg5wDNrcRdFRJQfDdbop5Kbc5OmGbFRLdoM5eIJ/U0i69haDzwQossLqNfIZ4+2AU22+TCecvsljAhSxjfIj/oYurlu/SVUGPGUFgQxwOYHQpM2pCIzkez6W4GaUmoTW4yjc2BrS+JRhwqbIG2otUAigARqISlex602IS0d/4Pku9YmFP/q1B9FGkcux9XmH0gUHgugqVmqV6pM7J253mK1WZLbbxd0FLgc9gEupb0yFxAXp93yVLKG+U9p36o5Tqzv1ep3Bf3X4Gf7Hx/u7ZFVgYc9wYbUaq9FXp1ZzYG3wWKvR25oDL3GdTq2ML2vYr47fywy/wQDqvklDcEt1HAcjoJk5+ITfYd8ObdjBmWjn+I8RBehdZzhDrb44l/lIvKjjguu0u2xRuHzLj7phAzbirpBr0N8p0w5pS3VkCzwRS2C4Q++IluGb4TRQqWMD9iU6DrYQS2vEJGgy63CYoVen3mZU3YhhPdxaPfMtyFpUrjowtk6qQYqBe7GsRJUBXiATQG0cMhH87hD/sbfjGAahkiEzLEtxFKmdeWUGEHupqUYyMyrtEGtxEjsY10MiqpHUWCps7ASG4DASD5kELmWuytJUjp2StjOhPPVaaijWakgVHFwDEqXuTmo8DjMLrDnMLM/aluGPWbg1IdOPVMchE61PMq021l7inbOSujzOM75nkGQfmHCfHTVfYg2hjD+0zo4gC8AyROMUb4B8d9RkP7Hvz9uts8PWAbXcQ60BIlgPgh5zZQyDcYw+Z+sH44OfKIlyN/dsDMIDcYVlw0iawwTKXikAwu5pNJp+2k/hYU9kE3eIgmP89BsdRiZ48j4+v+hC5gf5eqGbY7DBDt5QgxhJ9iEI1sLnGHKVs08O2mvhkHErrFdGylc2kM1HvFgZ9cR7c41NAxvitIXqBkDuCpJje5YI2YGbmNhNwZo0ll/H53VRxr5rOm6lP3dGl+VwUp2d7Y0j4/mxH121Qj5hgEljfTx8GQ8P+egfyueUKUHYmvhc283yBVdHl3ASq0D2Oj4dIYpxgYBulyj6+3WYTske1o6JGfjXNH1pPrtoa6LZgZG9NwjLsbkkZS1jFuAtEsgV1dw7/uOSMeqKPXIDLoA+yQj0aVwUAc36PnnfpzPJa9bRsgtBtrnaPwhRz2JzzR8Fjjdd7JXUglwpABY/0ef0dCK69syApqI84hr2I8J4rB90odKfOIGY2D7pW5BXI6BNRbQIFQ+PTbTZmjLKOpSBtcce/noYnh7VEWdxfswZUe2tRZZtO13NgfYe/nYTFAWQBELvVZqjq+gjllw+sS5r9g4bt/5310r6A2zuqDGdRz78p1A+sS4PrW6foraNCwl3V7fcH/LI+m7mfp3b+Mn8prf0afoPVe//H1BLAwQKAAAAAACImkhPAAAAAAAAAAAAAAAAHAAAAENvbmZpZ3VyYXRpb25zMi9hY2NlbGVyYXRvci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAABDb25maWd1cmF0aW9uczIvZmxvYXRlci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAABDb25maWd1cmF0aW9uczIvbWVudWJhci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABwAAABDb25maWd1cmF0aW9uczIvcHJvZ3Jlc3NiYXIvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAYAAAAQ29uZmlndXJhdGlvbnMyL3Rvb2xiYXIvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAaAAAAQ29uZmlndXJhdGlvbnMyL3N0YXR1c2Jhci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAAB8AAABDb25maWd1cmF0aW9uczIvaW1hZ2VzL0JpdG1hcHMvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAaAAAAQ29uZmlndXJhdGlvbnMyL3BvcHVwbWVudS9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABoAAABDb25maWd1cmF0aW9uczIvdG9vbHBhbmVsL1BLAwQKAAAAAACImkhPtPdo0oMDAACDAwAADAAAAG1hbmlmZXN0LnJkZjw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9InV0Zi04Ij8+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InN0eWxlcy54bWwiPgogICAgPHJkZjp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvbnMvb2ZmaWNlLzEuMi9tZXRhL29kZiNTdHlsZXNGaWxlIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiI+CiAgICA8bnMwOmhhc1BhcnQgeG1sbnM6bnMwPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy9ucy9vZmZpY2UvMS4yL21ldGEvcGtnIyIgcmRmOnJlc291cmNlPSJzdHlsZXMueG1sIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9ImNvbnRlbnQueG1sIj4KICAgIDxyZGY6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL25zL29mZmljZS8xLjIvbWV0YS9vZGYjQ29udGVudEZpbGUiLz4KICA8L3JkZjpEZXNjcmlwdGlvbj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIj4KICAgIDxuczA6aGFzUGFydCB4bWxuczpuczA9Imh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL25zL29mZmljZS8xLjIvbWV0YS9wa2cjIiByZGY6cmVzb3VyY2U9ImNvbnRlbnQueG1sIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiI+CiAgICA8cmRmOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy9ucy9vZmZpY2UvMS4yL21ldGEvcGtnI0RvY3VtZW50Ii8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KUEsDBAoAAAAIANCJSU9lmpKCiAsAAGlnAAAKAAAAc3R5bGVzLnhtbO1d727jNhJ/FcOHHu4+KLbs/L/NFsVeix6Q3Ss2u9j7FtAWZfOWFgWKiuN+7MvcI/Sx+go3/COKkilbSpys66QFWpgzJIfzmxkORxLz5vv7Be3dYZ4Rllz1w6Nhv4eTKYtIMrvqf/70U3De//7tGxbHZIovIzbNFzgRQSZWFGe9HnROssspS2IC7DlPLhnKSHaZoAXOLsX0kqU4KXpdutyXairdEk3a9o2QQBOU4Urv6VV/LkR6ORikOadHjM8G0XSAKZYds0F4FA4sLx9HrecC3so8HC3b90VL0KDbfTpHXLTWkWR2e8esbdf7jAYxC6ZskSJBJhRXh+GLtgNJXrfvAom51fRyuTxajpWuw4uL88F7IKr/vL+2/FigtnNJXneuJF9MMO9iFcoi3SG0ybYdwhi40z/lOAM66FA6RrtR3D7uWEq4toOsrSS7a+1bwNqAPPhNexEUc6U3vm9tu5LX7XsvDSnzWc5oOBwNNNkyU5J8bbCyi4GiWtYF9TH+5/21NkklY4qmuN8z6DphbtS3QS1mENBi4AsiPKXZ2zcaANvc07/lcFf9m9Viwmi/B4ouOBaErhxC2RlFjCcqBl31P+JZThGv0FMipuBRd4gTqe8KTQaADIPO74NMj/z2zaAm2GZJv0D8kVE88wjr0vZF3o9swgQLPdJqSucBfwAxae9zQmA3w733N76h/4pSlv2jzqlbK+vTHYIZTjAnsOFkS5JlnUV6x3JOMO99wMtGYRwejxxdMeosIaJkwolHupLSrBXOFijZqTwG+0ajeF5pPhEIKRKZ3kczth/DGl8Le9q9rNcEdlC1E/VuUOKLAlqsGl9r29+lrHUH3KmnrjKBF0/hJL6A0sZLnkKiMmg0h7nNkeUZpPwFtpyfUDLr3bxrFNLh+TZCfkJz8EWPfJbwvOJUQ0kzut1jzgOlHTTlTaZdnw2LVUU4Rjk1J8ZiKiP4jKN0Tqb9gtf8DlIOaSUXBNYjF5sJzr5iyGspgyPBX8bHpyfouN+TZ6zLmFBqKWeji3ga93sxu1zCUAFLdfKesED+Nl2yOWyiywCkhYQluL/qD4/C8DwkiZe+WqcLOJsFkIniQKaXYK/BnHHyK6gDUc0dHm/ivpNrm3p4IZVuPe4ar29Uo24Ky1kSMQ90Gh8jmjnQrmu9wCNFHClqBRFFkiMFKBdMZdhXfRJhplkRTefWS5SEE44R5PQAI5mKirmRJMLyACFLCu5iShnNbGgCBsTSzAq93uIT1vaX0q6tIc8wqCWRYOscVpuR4Hk1t61lRmBdqjkjv0JzOEqFaqMQtHI0gyacqIYpyxPBwX4+31h1YCEwD75injirrM8VwBELJZVtpmSQsxYMem4ztJm+oGELv5GjIJTSlBPKIyPF994Ypya0DN4pLbVMRotJLenmh9LianDY9kqsaBNALOb9jSYLYMxX6RwnKs0JKIoiQEGJqIIDJQtiV9XSstM8mYpcDyiDCxxFQR2A6nbTL2w3iAhEh0ROMjw6Kf11yYmQHr2AHOeqT3kgJv1XM//TmLlrbtguvmaDHC8QSdSxuTDE0RpTmmfzGsvufUiYjd7aJsWuDelS0IRx6TLSImGDAQuiKM2ksbsBudLxkQIFnC1rQkFLzam/YpwGgs2wmMtioXTaukDVTpuFcoUx1R5wzwjxqN8Yd3rV8VgulN9TfCcVZc2EogwO7BKzrZFKxx9KZomMG5A8FIP8N88EiVeB1DusbAmQuNbFOESnJCvsaEnA4fWvJ4kqPJ4G1jMEAi/HWfDjTZCDrQaCo6geLbJqtPjxZrstb0HnZ4wiJ+A2ggMN9plF4Ac2kRK4DJ+g4XY0vJ2waNUZRV2fpKwsmvKZfXYSgwYiXSHWVVR8D/2IJCFa1KGdEXQpFVS3QBz2F7D3VKV4p6dqyygJEyYEW0ja8HysaLr/FMIb/D9HtJ5eWR9SyWGixEV0iVbZYyzD2UzWahDFpvL0JYj6/nWcisYdqHouXZvVcHU/nxY9mw5aBd1bUa3sgF7p7abjKZ+siWSZH1hIKQdoXI3laF5PucHKFT02APicFHKqlKKV48Y9l/yYILFP/t/o+hdno7aur3aqOSazOYgZhiffbfP6dqhcQ1b7EHVvCLlUDtki6jRljS18Jnxip6k+L3igwb9DqqKxQ2MGOTj65tZsd6xH7WbqwaN+cqyqCVmVosy9eLA8fNgO13Ao0m2yB5wXYeFk2uowU3YrqJ7Oe2C27c5Jzmos3aznsXb/ryTC9zu0eqLG22j1z2BMLyhwfWB8gaiM7rej89sveHI7urj1b9matfc3YPr7LiBvOpp985gXXhw3xryCti3m7SZNX3us6U/Tn+KpZtuSkq+Is/5kZJsfdF3Bg5Lex/rKP7XBSmf5pUBV/vgJJvW7jOnRs+w9l9fWVXTe2k6IG8HZ+tFaDdHsehsl37alLk0iOmE0quhZE4ro2ES2OCiGx2JQgHl7Et/ekQj79W65XJbd6KqdmDFl+beYV6b412iCVUQP/cqxPL2wwRJbRqfiTY96UNrJGyD1jG54dLKhUOAtVVerBNtfAHhUVeBlhMCKfY222dfoMfZVSl97h2KbIru8TfHtlTjepsTxqxK3KvF4mxKPX7YS1cmoyLPXdflvTenXGFVCbtj12Upn6HbpcMwK5EvCSDhpuywJma71U5tLYhlRj9LgTKByZ1w8/5B46ccsMm/3DVtjMWOrxphRypY4CiYrXZwSyHmY0jyGj6WizibFtFTZ6FVlXVU2flVZV5Udv6qsq8pOXlXWVWWnryrrqrKzV5V1Vdn5q8q6quziVWVdVRYOX3Xm6KxKchWpxlo/OXxg8vjlPliuPzPoXetHxHWlKW7zoKb5dJHlcUzgxHP0J4PJmdy+VFrMb18qLd4pI+o966t+MDwa1R48UByLgn9n0Deg0AGj0UvA6KwrSGd7htL48FEKO0EU7hc+xy8AnxKJlhDp9j1C6eQloNQVpD3D6PQlYNRxPwr3bj86O3yURp0gGu0XPucvAJ+u+9Fo7/aji5eAUleQ9gyjalnhUEHquCGNnmtDcsgtShhfvnzIF2FjhWKSU4pFFV2jGTPrhhdvXPQD00sPqL4elI17DP/z1yc0UU26/cWjcNPj701gdoB6tA1qbyWE+aBmBwH1jo7QLYF2r2V6erC99ZI/fvufD03ZfBB4PrPrlhecPT2e3vrKH7/97sfz94PAc0dHipZo3tRulHsyKE+2xWGv7x5wHN5ZyruXkdhbzznwSDw+2DjsrfsceBweP7N/PlskPt8Wib277gFH4uMDjsPeWtOBx+HjQ8mIH1eXCvcZzMMqTCVM4CzQt+/n5roVSwjMl9ExY0L+9mNVxGR5peEdorm8ucw0Fh0zR0UpmuFKHy2hvIVIjld8T9svRPZI2EV2nERNohO/6Nsnlm8olVL7BGj8RFxfIKm/5j11rnfzqdSMUqpOmoyhkWTK1Z8ykOeTEt1Guep3bEkUwMJWLBflN8+2aT1o+C6KMiTTZcYJOJ/5ztrwqevknM+RfRNYsle0Qe3+UPNT3uoFuiLToCCsTVEptL5PF2VQaVgouKaiLEkk/6bBuX0QoFrLK1EaQTOjg/JFwGCntH8nIGVccETE2vfeYTUkFJ96h03VL6eRG3E23xDogai4F3U6lP/6OIzZjk99RPmHNqwyiqi2zsbzyapk8/NoQROW4MYRIAKyZe2uQJdJKXsD3bwRuIFDrcdAXl6g5bHsBMlr5epXJOr4FizQfWW15fW9hiHDaQFTMddweOagV1z7CEsGk1IdFNP44tzDhGJ5l6KXp3x98qqfMUrsh9EokpfF6ZihI4lu57BXGKFGJ9/ZSzGMmQzVP6UTuyva6tmaOsdI3hNotp2Br7Ece43R2+iNEetBwRAWKLNDWKlMoxyp9pF79aoId22VYDJYG6cUpTbjwP+nct7+H1BLAwQKAAAACADQiUlPqnGu10wHAADSMQAADAAAAHNldHRpbmdzLnhtbLVbW3PaOhD+KxneCSHpLUySDpDSckoCA6Q5p2/CXkBFljySHODfn10ZKOGSuth6aRpb2pVW+317kXPzeRGJsxfQhit5W6qeX5TOQAYq5HJyW3oatsqfSp/vbtR4zAOohSpIIpC2bMBaHGHOznC6NLVAyTHHCYmWNcUMNzXJIjA1G9RUDHI9r7Y9uuaUpU/CUda5IbNsxAy8mh3clqbWxrVKJU60OFd6UgmDCgigiaZSPa9WNmP1VZhZF459pUezefa5bI4W2p4eTJm2mW1Eg7dnj1XWqQsjymNVDlQUM8tHAl6L0VFWQTR2e27E7HRj6fl8fj6/crauXl9/qjzgS/fPQ2czHizLqovGbuuSSTQC/TdeYezy9VZTp80qYuXiW/NjDQbfow0JGtmkbM/ZluUWl1XI3k7MS2Zs4dAjJ4+4yb4EN/jVbFhk9l0auz13QY5kDnnO5cXFZSV9vRksuJwd8bLrinu7GRqJQwP/feikLunWGLMASmer090iusvShtbWbHZ3s2Km9EeZW4iI6s5Wj0nebUkpVXvhMN+QYOnQvNdzfuD4ugY2VHFp/cYuY3wjlJyU7i5uKvsisovtwNj6kPvMQzs9KPjqonpVzSf8G/DJ9PCyUfbHq9OkD6Zq3ocQ3QSaUyYnYHY0jJQSwGTpzuoETtPRlg2t5gYeVAjHpI+ZMJnFlyMWl7kMYQHhvrEOO5ibg5jTy2wmb4c7SzVWczI2+fLl6Ud51Pc+fKrmcL9jSLmuXn08VaohSiweK05s4ch2UvtHIYIAvLzOJbuhrFXRUfydiO6fSkVDFLXrbFOlbS4+6rClSmxTiSSSu5heSc9BSKn0hlKzwkC9b5cWC6zSh9d+faJp2maAeW5gIWxpfOBh5XUZ4BIhHGJU72IAHQuFoJ+wYHmCsgMPt4ns2OsVNx4egHE4e+ROHyTaZWh/E8J7yJbofrhOJTzEFCe+xybQYMFsolUid/m6KCV1KVWaoB5w9Xw4dfK/ahZPeeDLRsTfZCdvZ6CViRFQHpDk5DtK97mBFls87jPBOtrn8s4YdEuraAA22Y12hdmHaKYnMGmfKhHCLlsWoeZLFNvl/ajFQYTfeAimxzQr/jDqcSyWJHpCgHhgetbCOofZoXp0tS0dhx8P6APVOXCUQHLYbshGFANwNxMui1/+FzRMWDecyUGgeWxbyLcecOLUdJAD/aq554bK6O54THjvKcOJdb2cu9tRV4rlE577m9vJBZyRP+GDRLuoR/h/RsQMIiZE8Yb6HV4JmuTL92mnzsP5NwWPYwh7PLCJ9sH3LaGYda2aRxU5SHpQ8iRHWK3PnJY1cfnC5GBp8IUvF1uRFyWwnph3SFbyFdgHaHgB/6iRF/gR3JosNj3QAXUwJ/Dhgwc9WMAJ1AIuCDdBCD/Bt2942FdqN4tDK1J1+/7y3YlNBHcQoA9mQMzAh3cNLplenppnNZEE0fj3q0uOpooitlcI5EvliJTqpjlFs2PVqNfV3bPGobollq6M9OFh9+pRWfQw4kLi3O7ol+lKiow+3OygIQ80JpxHnFjudBQL+8BChXHXl8H6gDUqYaRurTaYQSIHEz/6oAC6djCP6h7GLBE+NNQFn0jkyIFV8TodKh77HS5nT3HI7KEGbb5WkTuSfxJj+XiJasA8c4upvUyYaFCQ9FIUqZhUDWIWIOwHUwT/zLS4NpYee8halETyBL1OxLoSkYqnVbwm9IS6q+fbMkSwonNvyiXTlh1ufPjg6nIAzWqxykcH/A574C2AyZ/kAvcTwE/Q6ssCd8nCNxL/vEWzvxwW6wkqW3+7Q+xrG+48SJcH6ZtdbCHJf9ShnwOV6KDYZkxdYALrjh1zwSaTAXiokwbJyFKGgBmBWecIdfebj7gQumpsdTBD5dJoSg49ODTqQjyClkz8AZS5dPwAbXnAhEunuuMxRnEfDIpBZ1UXpDcjLgrVjWskvxWQTldJn3g00LmJRF08p4t/Lyb0a7q26bARiPvVpwsevPrBPCsdYuoZDzXjaK9JQzCM3Z7KQ9DeG7TtiUQe2OQeadhuyz/2M3Oo7CaWPK0DLyD+o46t8altZcjC++dt8x0ZxzU2e4kMbMLeSn3zb4BOhr7LweNJbzaP7GbKJ9OyBoPcQQvKoRNdO5h5bNwI6Kv5d4Cjbp0jxXG1AuFmCFEs8P8ewil7geEUPVciE3hqnoUQrjOPwh2Y+imHKueravX9qR8C4amaPqC9OdpGpWTiq2tNLCxg4bXdj0lmV4QrBD4A2vv4JWhuEibj1WWYRhTMbYmPm0wEifBFLW35gjlNA0Ma6D+k0Plw8lWoEdsEZqrmfZjx1WVvf9jxpcI1Ot+8782TONMdI/qdJuB7yiu+cWQWSeWfv8zfEfzKqep2YJn2kFKSb/1IPwDtyqZQxkvjcd1YJcbByEraCv8eKmUan4mQuxyvJ1alwdFjX6E7+oUAzHA5mvNQrM/dHHDjgj6Och83VfY+VK4c+4uMu/8BUEsDBAoAAAAIANCJSU9X3VKIAgMAAFsJAAAIAAAAbWV0YS54bWy1VtFu0zAU/RUrT0wicdyyrg1tp6nTGKxlEutg4mVynZvVzLGD7awbv8Un8GM4SVsS6EQG2ksf7j3n3Ovrc90MD+9Tge5AG67kyCNB6CGQTMVc3oy8y/mJ3/cOx0OVJJxBFCuWpyCtn4KlCDmqNBFTMuEOnGsZKWq4iSRNwUSWRSoDueFEdXRUFqoi8aItN6aWLqiBBpuNvKW1WYRxlmsRKH2DY4ZBQEE0mAQEb7G6G7eu5bCNOpqu2nPpys2vTmdLqm3rGRXgOjtRban3RviJ8plKM2r5QkBTRqdthQpsnZtSu9xOerVaBatuOWsyGPTxzCXLn9l0i3cOaVurwNZryTxdgH6KK4x9aB61MmxbibW9a/xMg3F5N8NiLdqp1Dl1rbK5tiJ/nMTctd4tB33k5t3etG+hBDfYcN/auwW2zr0vjGR2OacThh1cpbdgweXtIy4b4DK7haZiF/BqNq0sWfaYUQYeWt9u7ZHreNsnrfDeeFg6kEtuORU+00Ct0uN3OZVo4nS+KHQkqGY/vssh3gmtBCB2Uenu4IEJMGPSW6N/i1fgkur68Z1/YdwJycAnoR+SOelFnUEUhmtyEzeMWdQkDOZkPyKvItIP+qTzeYg3iKrMDUjQZY+fYHF+fILDYD8YoJn6xoWgeD8I0YsZZVxaZZav0VtpQSAXQOcX6AqR8Jp0r3t76CjLBDiFM27xfvcg6PbQi7PT+Wz6Egl+C+gNsFu1hyZLrVLAB70gDLr9cBCQbgdd0IRqvqatT/WrrarN3ID2Y0i4hBiVkeICR56r+7G6N29MXLPhdi51xl9EjhW7AJZrbh+8Kn5HRQ6+fchcNhGKWm/8D7qnjq8LU5rJksobiHeoL5QSQF33CRUGnl5jWshfZnN17O70GfQvGBUw0Sp7Dm33PwZu+P8hbSHNhDs5Kpc/qsiGu6AbRhWjzOYOMfKU/ABfczB2k7HcFq/ee/fEUBHEyqabzFJDMvLcK4AbVcr12ux0tS/+xPlG5abcq+2648brgXd9Ho1/AlBLAwQKAAAACADQiUlPriMHnSYBAADZBAAAFQAAAE1FVEEtSU5GL21hbmlmZXN0LnhtbL2UwWrDMAyG73uK4OuIs/U0QtMeBnuC7gFUR0kNthwiuTRvP6eQNoMVAhm9ybas7+M3eLu/eJedsWcbqFLv+k1lSCbUltpKfR++8g+VsQDV4AJhpQZktd+9bD2QbZClnIosDSK+LSsVeyoDsOWSwCOXYsrQIdXBRI8k5e/+8oq+rWZGG7W70xrrME+3++He20Tn8g7kVKliNsJjbSGXoUvW0HXOGpA0sjhTra9eeq6jBS+SSMUfqOX8wyn6I4F1XMhU6o7aB1rWQ4vFeL4W7GAIUXID5oQLMjhagn5YTTWBZMwuPeUD6JhqMR6vRX0Gamwb+6s/b5Y+NEca7XS02swnrPaZ9nRfNwtcUtfrf8TAMjjkZwTOKJI+gaewPAqs4dx3p2L3A1BLAQIUAAoAAAAAAIiaSE9exjIMJwAAACcAAAAIAAAAAAAAAAAAAAAAAAAAAABtaW1ldHlwZVBLAQIUAAoAAAAAAIiaSE+dGBRJWhEAAFoRAAAYAAAAAAAAAAAAAAAAAE0AAABUaHVtYm5haWxzL3RodW1ibmFpbC5wbmdQSwECFAAKAAAAAACImkhPJBd0ji0AAAAtAAAADAAAAAAAAAAAAAAAAADdEQAAbGF5b3V0LWNhY2hlUEsBAhQACgAAAAgA0IlJT5uhV2NRFgAA6HoAAAsAAAAAAAAAAAAAAAAANBIAAGNvbnRlbnQueG1sUEsBAhQACgAAAAAAiJpITwAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAArigAAENvbmZpZ3VyYXRpb25zMi9hY2NlbGVyYXRvci9QSwECFAAKAAAAAACImkhPAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAADoKAAAQ29uZmlndXJhdGlvbnMyL2Zsb2F0ZXIvUEsBAhQACgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAHikAAENvbmZpZ3VyYXRpb25zMi9tZW51YmFyL1BLAQIUAAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAFQpAABDb25maWd1cmF0aW9uczIvcHJvZ3Jlc3NiYXIvUEsBAhQACgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAjikAAENvbmZpZ3VyYXRpb25zMi90b29sYmFyL1BLAQIUAAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAAMQpAABDb25maWd1cmF0aW9uczIvc3RhdHVzYmFyL1BLAQIUAAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAPwpAABDb25maWd1cmF0aW9uczIvaW1hZ2VzL0JpdG1hcHMvUEsBAhQACgAAAAAAiJpITwAAAAAAAAAAAAAAABoAAAAAAAAAAAAAAAAAOSoAAENvbmZpZ3VyYXRpb25zMi9wb3B1cG1lbnUvUEsBAhQACgAAAAAAiJpITwAAAAAAAAAAAAAAABoAAAAAAAAAAAAAAAAAcSoAAENvbmZpZ3VyYXRpb25zMi90b29scGFuZWwvUEsBAhQACgAAAAAAiJpIT7T3aNKDAwAAgwMAAAwAAAAAAAAAAAAAAAAAqSoAAG1hbmlmZXN0LnJkZlBLAQIUAAoAAAAIANCJSU9lmpKCiAsAAGlnAAAKAAAAAAAAAAAAAAAAAFYuAABzdHlsZXMueG1sUEsBAhQACgAAAAgA0IlJT6pxrtdMBwAA0jEAAAwAAAAAAAAAAAAAAAAABjoAAHNldHRpbmdzLnhtbFBLAQIUAAoAAAAIANCJSU9X3VKIAgMAAFsJAAAIAAAAAAAAAAAAAAAAAHxBAABtZXRhLnhtbFBLAQIUAAoAAAAIANCJSU+uIwedJgEAANkEAAAVAAAAAAAAAAAAAAAAAKREAABNRVRBLUlORi9tYW5pZmVzdC54bWxQSwUGAAAAABIAEgCfBAAA/UUAAAAA';

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;

  constructor(
    private commonsService: CommonsService,
  ) { }

  init() {
    this.commonsService.toggleSpinner();
    this.createEditorFromURI('fillForm', 'editorContainer', this.defaultUri);
      setTimeout(() => {
        this.resizeDocumentContainer();
        window.addEventListener('resize', this.resizeDocumentContainer);
        this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
        this.commonsService.toggleSpinner();
      }, 5000);
  }

  createEditorFromURI(formType: string, idOfContainer: string = 'editorContainer', dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], {type: mimeString});
    const url = URL.createObjectURL(blob);
    window['DOCUMENTOURL'] = url;
    FormBasedDocsApi.createEditor(formType, idOfContainer);
  }

  getEditorSession() {
    return FormBasedDocsApi.getEditorSession();
  }

  resizeDocumentContainer() {
    FormBasedDocsApi.documentToFitScreen();
  }

  buildDocument(steps: any) {
    this.currentDocumentBodyClone = this.originalDocumentBodyClone.cloneNode(true);
    // 1.- Change doc structure
    this.structuralChanges(steps);
    // 2.- Change values
    this.replacements(steps);

    document.getElementsByTagName('office:text')[0].parentElement.replaceChild(
      this.currentDocumentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]
    );
  }
  /************************/
  /* CHANGE DOC STRUCTURE */
  /************************/
  structuralChanges(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iRadioC') {
        this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        // this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        this.buildForEach(step);
      }
    });
  }

  buildForEach(step: any) {
    step.content.forEach((content: any) => {
      const elementContainingWord = this.findword(content.wordToReplace);
      if (elementContainingWord.textContent === content.wordToReplace) {
        // need to traverse from the end
        const newarray = content.modifiedReplacements.slice().reverse();
        newarray.forEach((modifiedReplacement: any, index: number) => {
          let exactElementContainingWord: any;
          const regexp = new RegExp(step.wordToReplace, 'g');
          if (index !== content.modifiedReplacements.length - 1) {
            const elementContainingWordClone = elementContainingWord.cloneNode(true);
            elementContainingWord.parentNode.insertBefore(elementContainingWordClone, elementContainingWord.nextSibling);
            exactElementContainingWord = elementContainingWordClone;
            while (exactElementContainingWord.firstElementChild) {
              exactElementContainingWord = exactElementContainingWord.firstElementChild;
            }
            exactElementContainingWord.innerHTML = exactElementContainingWord.innerHTML.replace(regexp, modifiedReplacement);
          } else {
            exactElementContainingWord = elementContainingWord;
            while (exactElementContainingWord.firstElementChild) {
              exactElementContainingWord = exactElementContainingWord.firstElementChild;
            }
            exactElementContainingWord.innerHTML = exactElementContainingWord.innerHTML.replace(regexp, modifiedReplacement);
          }
        });
      }
    });
  }

  buildForRadioC(step: any) {
    let elementContainingWord = this.findword(step.wordToReplace);
    const regexp = new RegExp(step.wordToReplace, 'g');
    let replacement: string;
    step.radios.forEach((radio) => {
      if (radio.checked) {
        replacement = radio.replacement;
      }
    });

    // // Case where we have just one paragraph with the wordToReplace
    // if (elementContainingWord.children.length === 1) {
    //   elementContainingWord.firstChild.innerHTML = replacement;
    // } else {
    //   while (elementContainingWord.firstElementChild) {
    //     elementContainingWord = elementContainingWord.firstElementChild;
    //   }
    //   elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
    // }
    while (elementContainingWord.firstElementChild) {
        elementContainingWord = elementContainingWord.firstElementChild;
      }
    elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
  }

  buildForCheckbox(step: any) {
    const elementContainingWord = this.findword(step.wordToReplace);
    let replacement = step.replacement;
    step.checkboxes.forEach((checkbox) => {
      // Check if it contains the word (rules)
      if (step.replacement.includes(checkbox.wordToReplace)) {
        if (checkbox.checked) {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, checkbox.replacement);
        } else {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, '');
        }
      }
    });
    // Case where we have just one paragraph with the wordToReplace
    if (elementContainingWord.children.length === 1) {
      elementContainingWord.firstChild.innerHTML = replacement;
    }
  }
  /*****************************/
  /*END OF CHANGE DOC STRUCTURE*/
  /*****************************/

  replacements(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iDate') {
        let elementContainingWord = this.findword(step.wordToReplace);
        const regexp = new RegExp(step.wordToReplace, 'g');
        if (elementContainingWord.innerHTML !== step.wordToReplace) {
          // Find the innermost element containing the word
          elementContainingWord = this.findExactContainingElement(step.wordToReplace, elementContainingWord);
          console.log(elementContainingWord);
        }
        if (elementContainingWord) {
          elementContainingWord.innerHTML =
          elementContainingWord.innerHTML
          .replace(
          regexp,
          `<span class="highlight ${step.isFocused ? 'focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</span>`);
        }
      }
    });
  }

  findword(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    // USE ARRAY FOR ALL VALUES
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace)) {
          return children[i];
        }
      }
    }
  }

  findExactContainingElement(wordToReplace: string, bodyClone: any) {
  let element: any = bodyClone;
    while (element.childNodes && element.childNodes.length > 0 && element.innerHTML.includes(wordToReplace)) {
      element.childNodes.forEach(((el: any) => {
        if (el.nodeName !== '#text') {
          if (el.innerHTML.includes(wordToReplace)) {
            element = el;
          }
        } else {
          if (el.textContent.includes(wordToReplace)) {
            element = el;
          }
        }
      }));
    }
    if (element.nodeName === '#text') {
      element = element.parentNode;
    }
    return element;
  }

  elementIsExcluded(element: any) {
    const excludedElements = [
        'office:text',
        'text:sequence-decls',
        'text:sequence-decl',
        'draw:frame',
        'draw:image',
        'office:annotation',
        'office:annotation-end',
        'dc:creator',
        'dc:date'
    ];
    return excludedElements.includes(element.nodeName);
  }
}
